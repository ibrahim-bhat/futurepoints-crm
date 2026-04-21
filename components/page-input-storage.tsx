'use client'

import { FormEvent, useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface StoredEntry {
  id: string
  page: string
  value: string
  createdAt: number
}

const STORAGE_KEY = 'futurepoints-page-inputs'

export function PageInputStorage() {
  const pathname = usePathname()
  const [value, setValue] = useState('')
  const [entries, setEntries] = useState<StoredEntry[]>([])

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      const parsed = raw ? JSON.parse(raw) : []
      if (!Array.isArray(parsed)) {
        setEntries([])
        return
      }

      const normalized = parsed
        .filter((entry) => entry && typeof entry === 'object')
        .map((entry) => ({
          id: String(entry.id ?? `${entry.page ?? 'unknown'}-${entry.value ?? ''}-${Date.now()}-${Math.random()}`),
          page: String(entry.page ?? ''),
          value: String(entry.value ?? ''),
          createdAt: Number(entry.createdAt ?? Date.now()),
        }))

      setEntries(normalized)
    } catch {
      setEntries([])
    }
  }, [])

  const pageEntries = useMemo(
    () => entries.filter((entry) => entry.page === pathname),
    [entries, pathname]
  )

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmed = value.trim()
    if (!trimmed) return

    const nextEntries = [
      ...entries,
      {
        id: crypto.randomUUID(),
        page: pathname,
        value: trimmed,
        createdAt: Date.now(),
      },
    ]
    setEntries(nextEntries)
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextEntries))
    setValue('')
  }

  return (
    <section className="bg-card border border-border rounded-lg p-4 mb-6">
      <p className="text-sm font-medium mb-3">Page Input</p>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-3">
        <Input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Type and save for this page..."
        />
        <Button type="submit">Add</Button>
      </form>

      <div className="space-y-2">
        {pageEntries.length > 0 ? (
          pageEntries.map((entry) => (
            <div
              key={entry.id}
              className="text-sm border border-border/60 rounded-md px-3 py-2"
            >
              {entry.value}
            </div>
          ))
        ) : (
          <p className="text-sm text-muted-foreground">No saved inputs for this page yet.</p>
        )}
      </div>
    </section>
  )
}

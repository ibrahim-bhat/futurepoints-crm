import { ReactNode } from 'react'
import { Sidebar } from './sidebar'
import { Header } from './header'
import { GlobalPageInputs } from './global-page-inputs'

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            <div className="max-w-7xl mx-auto">
              <GlobalPageInputs />
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

'use client'

import { Bell, Settings, User, LogOut, Search, FlaskConical } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function Header() {
  return (
    <header className="sticky top-0 right-0 left-0 lg:left-64 z-40 bg-card border-b border-border">
      <div className="px-6 py-2 border-b border-border/70">
        <div className="flex items-center gap-2 text-xs text-amber-500 font-medium">
          <FlaskConical className="w-3.5 h-3.5" />
          <span>Prototype only - values and workflows are for demo purposes.</span>
        </div>
      </div>
      <div className="h-14 px-6 flex items-center justify-between gap-4">
        {/* Search area - can be expanded */}
        <div className="hidden md:flex flex-1 items-center gap-3">
          <div className="relative max-w-md w-full">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <Input placeholder="Type here..." className="pl-9" />
          </div>
          <p className="text-sm text-muted-foreground hidden xl:block">Service Management Dashboard</p>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <Button
            variant="ghost"
            size="icon"
            className="relative"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
          </Button>

          {/* User menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full overflow-hidden"
              >
                <Avatar className="w-9 h-9">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=ServiceFlow" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="flex items-center gap-2 p-2">
                <Avatar className="w-9 h-9">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=ServiceFlow" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-medium">Admin User</p>
                  <p className="text-xs text-muted-foreground">admin@example.com</p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="w-4 h-4 mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export default function Header() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: "ホーム", href: "/", en: "HOME" },
    { name: "トリミング", href: "/trimming", en: "TRIMMING" },
    { name: "エステ", href: "/esthetic", en: "ESTHETIC" },
    { name: "ペットホテル", href: "/hotel", en: "HOTEL" },
    { name: "アクセス・ご予約", href: "/access", en: "ACCESS" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-teal-light border-b border-teal/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="relative h-14 w-14 mr-2">
              <Image src="/images/logo.png" alt="ARURU DOG MIMI" width={56} height={56} className="object-contain" />
            </div>
            <span className="text-2xl font-medium text-teal-dark">ARURU DOG MIMI</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="group flex flex-col items-center">
                <span className="text-sm font-medium text-teal-dark transition-colors group-hover:text-teal">
                  {item.name}
                </span>
                <span className="text-[10px] text-teal-dark/70 group-hover:text-teal/70">{item.en}</span>
              </Link>
            ))}
          </nav>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-teal-dark">
                <Menu className="h-6 w-6" />
                <span className="sr-only">メニューを開く</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-teal-light">
              <div className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="flex flex-col" onClick={() => setOpen(false)}>
                    <span className="text-lg font-medium text-teal-dark">{item.name}</span>
                    <span className="text-xs text-teal-dark/70">{item.en}</span>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}


"use client"

import Link from "next/link"
import { Boxes, ArrowDownToLine, BarChart3, ArrowUpFromLine, User } from "lucide-react"
import { cn } from "@/lib/utils"

const tabs = [
  { id: "produtos", label: "Produto", icon: Boxes, href: "/" },
  { id: "entrada", label: "Entrada", icon: ArrowDownToLine, href: "#" },
  { id: "relatorio", label: "Relatório", icon: BarChart3, href: "#" },
  { id: "saida", label: "Saída", icon: ArrowUpFromLine, href: "#" },
  { id: "perfil", label: "Perfil", icon: User, href: "#" },
]

export function BottomNav({ active = "produtos" }: { active?: string }) {
  return (
    <nav className="sticky bottom-0 z-20 border-t border-border bg-card md:hidden">
      <ul className="mx-auto flex max-w-md items-stretch justify-between px-2">
        {tabs.map((tab) => {
          const isActive = tab.id === active
          const Icon = tab.icon
          return (
            <li key={tab.id} className="flex-1">
              <Link
                href={tab.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex w-full flex-col items-center gap-1 py-2.5 text-[11px] font-medium transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
                )}
              >
                <Icon className={cn("size-5", isActive && "stroke-[2.5]")} />
                {tab.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

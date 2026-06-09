import { PackagePlus } from "lucide-react"
import { DesktopSidebar } from "@/components/desktop-sidebar"
import { BottomNav } from "@/components/bottom-nav"
import { ProductsTopBar } from "@/components/products-top-bar"
import { ProductsStats } from "@/components/products-stats"
import { ProductsList } from "@/components/products-list"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <DesktopSidebar active="produtos" />

      <main className="flex min-h-screen flex-col md:ml-[260px]">
        <div className="flex-1 overflow-y-auto md:p-8">
          <div className="mx-auto w-full max-w-md md:max-w-[1100px]">
            <ProductsTopBar />

            <div className="px-5 pt-5 md:px-0 md:pt-8">
              <ProductsStats />
            </div>

            <div className="px-5 pb-6 pt-6 md:px-0">
              <ProductsList />
            </div>
          </div>
        </div>

        <div className="sticky bottom-14 z-10 px-5 pb-3 md:bottom-8 md:right-8 md:flex md:justify-end md:px-8">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-lg transition-all hover:bg-primary/90 active:scale-[0.99] md:w-auto md:px-6"
          >
            <PackagePlus className="size-5" />
            Adicionar produto
          </button>
        </div>

        <BottomNav active="produtos" />
      </main>
    </div>
  )
}

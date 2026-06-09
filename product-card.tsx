import { cn } from "@/lib/utils"
import type { Product } from "@/lib/products-data"

const statusConfig = {
  critical: {
    border: "border-l-critical",
    bar: "bg-critical",
    badge: "bg-critical-soft text-critical",
    label: "Crítico",
  },
  warning: {
    border: "border-l-warning",
    bar: "bg-warning",
    badge: "bg-warning-soft text-warning-foreground",
    label: "Baixo",
  },
  stable: {
    border: "border-l-stable",
    bar: "bg-stable",
    badge: "bg-secondary text-stable",
    label: "OK",
  },
} as const

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const config = statusConfig[product.status]
  const pct = Math.min(100, Math.round((product.stock / product.min) * 100))

  return (
    <article
      className={cn(
        "animate-alert-enter rounded-xl border border-border border-l-4 bg-card p-4 shadow-sm transition-shadow hover:shadow-md md:p-5",
        config.border,
      )}
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-pretty font-semibold leading-snug text-foreground">{product.name}</h3>
          <p className="mt-0.5 text-xs text-muted-foreground">{product.category}</p>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-1.5">
          <span className={cn("rounded-full px-2.5 py-1 text-xs font-bold", config.badge)}>{config.label}</span>
          {product.expiryDays !== undefined && (
            <span className="rounded-full bg-critical px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-critical-foreground">
              Vence em {product.expiryDays} {product.expiryDays === 1 ? "dia" : "dias"}
            </span>
          )}
        </div>
      </div>

      <div className="mt-4 flex items-end justify-between gap-3">
        <div>
          <p className="text-2xl font-bold leading-none text-foreground">
            {product.stock}
            <span className="ml-1 text-sm font-medium text-muted-foreground">{product.unit}</span>
          </p>
          <p className="mt-1 text-xs text-muted-foreground">Mínimo: {product.min}</p>
        </div>
      </div>

      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-track">
        <div className={cn("h-full rounded-full transition-all", config.bar)} style={{ width: `${pct}%` }} />
      </div>
    </article>
  )
}

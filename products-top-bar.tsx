export function ProductsTopBar() {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-border bg-card px-5 py-4 md:border-0 md:bg-transparent md:px-0 md:py-0">
      <div className="min-w-0">
        <p className="text-sm text-muted-foreground">Olá,</p>
        <h1 className="text-2xl font-bold leading-tight text-foreground md:text-3xl">David</h1>
        <p className="mt-0.5 truncate text-sm text-muted-foreground">Supermercado Central</p>
      </div>
      <div
        className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground"
        aria-hidden="true"
      >
        D
      </div>
    </header>
  )
}

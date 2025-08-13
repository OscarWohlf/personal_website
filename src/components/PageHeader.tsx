export default function PageHeader({
  title,
  actions,
}: {
  title: string
  actions?: React.ReactNode
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <h1 className="text-2xl md:text-3xl font-semibold">{title}</h1>
      {actions}
    </div>
  )
}

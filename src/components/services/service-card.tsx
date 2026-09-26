type ServiceCardProps = Readonly<{
  number: string;
  title: string;
  description: string;
  marker: string;
}>;

export function ServiceCard({
  number,
  title,
  description,
  marker,
}: ServiceCardProps) {
  return (
    <article className="group flex min-h-[250px] flex-col rounded-[1.35rem] border border-line bg-panel p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[var(--shadow-soft)] sm:p-7">
      <div className="flex items-center justify-between">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-sm font-semibold text-brand">
          {number}
        </span>
        <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-muted sm:text-[10px]">
          {marker}
        </span>
      </div>
      <div className="mt-auto pt-12">
        <h3 className="text-xl font-semibold tracking-tight text-ink">{title}</h3>
        <p className="mt-2 max-w-xs text-sm leading-6 text-muted">{description}</p>
      </div>
      <div className="mt-6 h-px w-10 bg-brand transition-all duration-300 group-hover:w-full" />
    </article>
  );
}

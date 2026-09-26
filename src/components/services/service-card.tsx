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
    <article className="group flex min-h-[230px] flex-col border-t border-line py-6 transition-colors duration-300 hover:border-brand/60 motion-reduce:transition-none sm:min-h-[250px] sm:py-8">
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-xs font-medium tracking-[0.12em] text-brand">
          {number}
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.17em] text-muted">
          {marker}
        </span>
      </div>
      <div className="mt-auto pt-10">
        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-[1.75rem]">
          {title}
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-6 text-muted sm:text-[15px]">
          {description}
        </p>
      </div>
      <div className="mt-6 h-px w-8 bg-brand/75 transition-[width] duration-300 group-hover:w-16 motion-reduce:transition-none" />
    </article>
  );
}

import Image from "next/image";
import { getWhatsAppHref } from "@/config/site";

type WhatsAppLinkProps = Readonly<{
  children: string;
  className?: string;
}>;

export function WhatsAppLink({
  children,
  className = "",
}: WhatsAppLinkProps) {
  return (
    <a
      href={getWhatsAppHref()}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-[0_6px_18px_rgba(8,119,201,0.16)] transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-[0_10px_26px_rgba(8,119,201,0.24)] active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 ${className}`}
    >
      <Image
        src="/whatsapp.png"
        alt=""
        aria-hidden="true"
        width={20}
        height={20}
        className="h-5 w-5 shrink-0 object-contain"
      />
      <span>{children}</span>
    </a>
  );
}

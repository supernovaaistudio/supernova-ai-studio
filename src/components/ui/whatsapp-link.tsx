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
      className={`inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${className}`}
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

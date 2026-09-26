export const WHATSAPP_DESTINATION = "+977 9707948209";

export function getWhatsAppHref() {
  const destination = WHATSAPP_DESTINATION.replace(/\D/g, "");

  return `https://wa.me/${destination}`;
}

export const navigationLinks = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
] as const;

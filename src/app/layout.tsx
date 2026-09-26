import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SuperNova AI Studio — AI-Powered Advertising Videos",
    template: "%s | SuperNova AI Studio",
  },
  description:
    "SuperNova AI Studio creates AI-powered advertising videos for businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" data-theme="light" className="h-full antialiased">
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}

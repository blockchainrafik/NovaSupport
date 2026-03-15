import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NovaSupport",
  description: "Stellar-native support profiles for maintainers, creators, and developers."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


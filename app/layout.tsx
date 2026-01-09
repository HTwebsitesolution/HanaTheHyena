import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hana the Hyena",
  description: "An Ethiopian adventure about courage, friendship, and food.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

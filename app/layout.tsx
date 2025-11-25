import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GSI",
  description: "GSI Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

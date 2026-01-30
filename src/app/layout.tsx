import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rachel August",
  description: "Actress and Voice-Over Artist",
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

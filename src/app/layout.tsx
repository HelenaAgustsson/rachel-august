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
      <body className="bg-fixed bg-linear-to-b md:bg-linear-to-r from-orange-dark via-yellow-dark to-yellow-light">
        {children}
      </body>
    </html>
  );
}
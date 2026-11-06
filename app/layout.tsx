import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Maikel Martínez Landa | Project Showcase",
  description: "Explore software engineering, interactive applications and original products by Maikel Martínez Landa.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

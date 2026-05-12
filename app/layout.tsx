import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Cairo, Caveat, Nunito, Figtree } from "next/font/google";
import AppShell from "@/components/shared/AppShell";
import QueryProvider from "@/components/shared/QueryProvider";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${figtree.variable} ${caveat.variable} ${cairo.variable} font-cairo antialiased`}
        suppressHydrationWarning
      >
        <QueryProvider>
          <AppShell>{children}</AppShell>
        </QueryProvider>
      </body>
    </html>
  );
}

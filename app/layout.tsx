import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Cairo, Caveat, Nunito, Figtree } from "next/font/google";
import InitialPageLoader from "@/components/shared/InitialPageLoader";
import QueryProvider from "@/components/shared/QueryProvider";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import CustomCursor from "@/components/shared/CustomCursor";

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
          <InitialPageLoader>
            <CustomCursor />
            <Header />
            {children}
            <Footer />
          </InitialPageLoader>
        </QueryProvider>
      </body>
    </html>
  );
}

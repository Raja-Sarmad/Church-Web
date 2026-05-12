"use client";

import { usePathname } from "next/navigation";

import CustomCursor from "@/components/shared/CustomCursor";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import InitialPageLoader from "@/components/shared/InitialPageLoader";

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <InitialPageLoader>
      <CustomCursor />
      <Header />
      {children}
      <Footer />
    </InitialPageLoader>
  );
}

import Navbar from "@/features/supabase/Navbar";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  // Solve typescript error

  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

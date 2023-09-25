import Navbar from "@/features/supabase/Navbar";
import { ReactNode } from "react";
import { createContext } from "react";
import { SupashipUserInfo, useSession } from "@/features/supabase/use-session";

type LayoutProps = {
  children: ReactNode;
};

export const UserContext = createContext<SupashipUserInfo>({
  session: null,
  profile: null,
});

export default function Layout({ children }: LayoutProps) {
  const supashipUserInfo = useSession();

  return (
    <>
      <UserContext.Provider value={supashipUserInfo}>
        <Navbar />
        <main>{children}</main>
      </UserContext.Provider>
    </>
  );
}

import { ReactElement } from "react";
import Layout from "./layout";
import MessageBoard from "@/features/supabase/MessageBoard";
import AllPosts from "./AllPosts";
import PostView from "./PostView";
import Welcome, { welcomeLoader } from "./Welcome";

export default function Page() {
  return <h1>Hey Supabase</h1>;
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

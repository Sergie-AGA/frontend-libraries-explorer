import { ReactElement } from "react";
import Layout from "./layout";

export default function Page() {
  return <h1>Hey Supabase</h1>;
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

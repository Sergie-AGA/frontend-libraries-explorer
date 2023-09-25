import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config({ path: "supabase.env" });

console.log("here", process.env.SUPABASE_API_URL);
const supabaseUrl = process.env.SUPABASE_API_URL!;
const supabaseKey = process.env.SUPABASE_ANON_KEY!;

export const supaClient = createClient(supabaseUrl, supabaseKey);

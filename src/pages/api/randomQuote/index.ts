import { NextResponse } from "next/server";
import getRandomQuote from "@/lib/getRandomQuote";

export default async function GET(req: Request) {
  const quotes = await getRandomQuote();

  return NextResponse.json(quotes);
}

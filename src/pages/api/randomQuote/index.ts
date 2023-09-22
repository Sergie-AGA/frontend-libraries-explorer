import type { NextApiRequest, NextApiResponse } from "next";
import getRandomQuote from "@/lib/getRandomQuote";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const quote = await getRandomQuote();

  return res.status(200).json({ quote });
}

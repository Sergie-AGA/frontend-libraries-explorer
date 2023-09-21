import type { NextApiRequest, NextApiResponse } from "next";
import getAllQuotes from "@/lib/getAllQuotes";

type ResponseData = {
  quotes: Quote[];
};

export default async function GET(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const quotes = await getAllQuotes();
  return res.status(200).json({ quotes });
}

import dotenv from "dotenv";

dotenv.config({ path: "planetscale.env" });

export const config = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
};

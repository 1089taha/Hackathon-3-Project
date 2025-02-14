import { createClient } from '@sanity/client';
import dotenv from "dotenv"

dotenv.config()

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
export const apiVersion = '2024-03-13';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

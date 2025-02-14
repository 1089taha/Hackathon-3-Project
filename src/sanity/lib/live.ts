// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { defineLive } from "next-sanity";
import { createClient } from 'next-sanity'
import { projectId, dataset, apiVersion } from './sanityClient'

const liveClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

export const { sanityFetch, SanityLive } = defineLive({ 
  client: liveClient
});

// ./src/lib/sanity.client.ts

import imageUrlBuilder from "@sanity/image-url";
import {createClient} from 'next-sanity'

export const config = {

 projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
 dataset:process.env.NEXT_PUBLIC_SANITY_DATASET, // "production"
 apiVersion:process.env.NEXT_PUBLIC_SANITY_API_VERSION ,// "2023-01-01"

 useCdn:process.env.NEXT_PUBLIC==="production"

};
export const client = createClient(config)

export const urlFor =(source) =>imageUrlBuilder(config).image(source)


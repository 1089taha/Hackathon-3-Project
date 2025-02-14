import { groq } from "next-sanity";
import { client } from "../sanity/lib/sanityClient";
import type { Product } from "../types/types";

interface SanityProduct extends Omit<Product, 'id'> {
  _id: string;
}

const productQuery = groq`
  *[_type == "product"]{
    _id,
    name,
    description,
    slug { current },
    image {
      asset->{
        url
      }
    },
    price,
    tags,
    features,
    dimensions {
      height,
      width,
      depth
    },
    category->{
      name,
      slug
    }
  }
`;

// Function to fetch products
export const fetchProducts = async (): Promise<Product[]> => {
  const fetchedProducts = await client.fetch<SanityProduct[]>(productQuery);

  // Map _id to id
  return fetchedProducts.map((product) => ({
    ...product,
    id: product._id,
  }));
}

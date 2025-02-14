export interface Product {
    _id?: string;
    id: string;
    name: string;
    description: string;
    slug: { current: string };
    image: { asset: { url: string } };
    price: number;
    tags?: string[];
    features?: string[];
    dimensions?: {
      height: number;
      width: number;
      depth: number;
    };
    category?: {
      name: string;
      slug: string;
    };
    quantity?: number;
  }
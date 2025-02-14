"use client";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/sanityClient";
import Image from "next/image";
import { useState, useEffect } from "react";


export interface Product {
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



const Page = ({ params }: { params: { slug: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const productQuery = groq`
        *[_type == "product" && slug.current == $slug][0] {
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
          },
          quantity
        }
      `;
      const fetchedProduct = await client.fetch(productQuery, { slug: params.slug });
      setProduct(fetchedProduct);
      setLoading(false);
    };

    fetchProduct();
  }, [params.slug]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div className="text-center text-red-500">Product not found!</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="relative flex justify-center items-center bg-gray-100 rounded-lg overflow-hidden p-4 shadow-lg">
          {product.image && (
            <Image
              src={product.image.asset.url}
              width={500}
              height={500}
              alt={product.name}
              className="object-cover rounded-lg"
            />
          )}
        </div>

        <div className="flex flex-col gap-6 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-xl text-gray-800 font-semibold">Price: £{product.price}</p>

          <p className="text-lg text-gray-700 leading-relaxed">{product.description}</p>

          {product.features && (
            <div className="bg-gray-100 p-4 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900">Features</h2>
              <ul className="list-disc pl-5 text-gray-800">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {product.dimensions && (
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Dimensions:</span> {product.dimensions.height} x {product.dimensions.width} x {product.dimensions.depth}
            </p>
          )}

          {product.quantity !== undefined && (
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Available Quantity:</span> {product.quantity} Pieces
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;

import { fetchProducts } from "../query";
import ClientPage from "./ClientPage"; // Move the client logic to a separate file

const Page = async () => {
  const products = await fetchProducts(); // Fetch products on the server
  return <ClientPage products={products} />;
};

export default Page;


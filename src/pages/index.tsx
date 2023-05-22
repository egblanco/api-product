import Image from "next/image";
import { Inter } from "next/font/google";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

function Home({ data }: { data: any }) {
  //const getJson = async () => {
  //  const response = await fetch(
  //    "https://ornate-scone-f87809.netlify.app/api/products.json"
  //  );
  //  const jsonData = await response.json();
  //  console.log(jsonData);
  //};

  //getJson();

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="text-4xl font-bold text-center">API</h1>
      {data.data.map((product: any) => (
        <div key={product.id}>
          Name: {product.name} - Price: {product.price} - Description:{" "}
          {product.description} - Image: {product.image}
        </div>
      ))}
    </main>
  );
}

export async function getStaticProps() {
  // Make a GET request
  const response = await axios.get(
    "https://ornate-scone-f87809.netlify.app/api/products.json"
  );
  const data = response.data;

  return {
    props: {
      data,
    },
  };
}

export default Home;

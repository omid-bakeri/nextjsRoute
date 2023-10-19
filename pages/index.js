import Link from "next/link";
import fs from "fs/promises";
import path from "path";

function HomePage(props) {
  const { products } = props;
  return (
    <>
      <div>
        <h2
          className="bg-red-500
        select-none
         text-white text-2xl
      text-center p-4"
        >
          Home Page
        </h2>
      </div>

      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <Link href={`/users/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>

      {/* <ul className="p-4 text-xl leading-10 text-red-500">
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul> */}
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "products.json");
  const jsonData = await fs.readFile(filePath);

  const data = JSON.parse(jsonData);
  return {
    props: {
      products: data.products,
    },
  };
}
export default HomePage;

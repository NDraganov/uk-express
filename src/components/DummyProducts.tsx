import { useGetAllProductsQuery } from "../api/productsApiSlice";

export default function DummyProducts() {
  const { data: products } = useGetAllProductsQuery(undefined);
  console.log(products);
  return (
    <div>
      <ul>
        {products?.products.map((product) => (
          <li key={product.id}>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

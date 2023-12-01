import { useGetSmartphonesQuery } from "../../../api/productsApiSlice";

export default function Smartphones() {
  const { data } = useGetSmartphonesQuery(undefined);
  console.log(data);
  return (
    <div>
      <ul>
        {data?.products.map((smartphone) => (
          <li key={smartphone.id}>
            <h2>{smartphone.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

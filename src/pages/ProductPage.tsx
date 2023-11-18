import { useParams } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

export default function ProductPage() {
  const { id } = useParams();
  const product = useAppSelector((state) => state.allProducts.data.find(product=>product.id === Number(id)));
 
  return (
    <main>
      {!product && <p>Error</p> }
      <div>
        <img src={product?.image} alt={product?.title} />
      </div>
      <div>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <p>
          <span>{product?.price}</span>
        </p>
        <p>
          <span>{product?.rating.count}</span>
        </p>
        <p>
          <span>{product?.rating.rate}</span>
        </p>
      </div>
    </main>
  );
}

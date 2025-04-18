import { Product } from "@/types";
import ProductCard from "./productCard";

const ProductList = ({
  data,
  title,
  limit,
}: {
  data: Product[];
  title?: string;
  limit?: number;
}) => {
  // We can use the limit prop to limit the number of products displayed
  const limitedData = limit ? data.slice(0, limit) : data;

  return (
    <div id="product-section" className="my-10">
      <h3 className=" h3-bold mb-4">{title}</h3>
      {data.length > 0 ? (
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {limitedData.map((product: Product) => (
            <ProductCard product={product} key={product.slug} />
          ))}
        </div>
      ) : (
        <div>
          <p>No products found</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;

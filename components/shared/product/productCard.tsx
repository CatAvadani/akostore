import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./productPrice";
import Rating from "./rating";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="w-full max-w-sm border-0 shadow-none hover:opacity-80 transition-all duration-200 ease-in-out">
      <CardHeader className=" p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            height={300}
            width={300}
            priority={true}
            className=" object-cover w-full h-96"
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className=" text-xs">{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className=" text-sm font-medium">{product.name}</h2>
        </Link>
        <div className="flex-between gap-4">
          <Rating value={Number(product.rating)} />
          {product.stock > 0 ? (
            <ProductPrice value={Number(product.price)} />
          ) : (
            <p className=" text-destructive">Out of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

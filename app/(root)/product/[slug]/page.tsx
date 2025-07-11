import { auth } from "@/auth";
import AddToCart from "@/components/shared/product/addToCart";
import ProductImages from "@/components/shared/product/productImages";
import ProductPrice from "@/components/shared/product/productPrice";
import Rating from "@/components/shared/product/rating";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getMyCart } from "@/lib/actions/cart.actions";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import ReviewList from "./reviewList";

const ProductDetails = async (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = await props.params;

  const session = await auth();
  const userId = session?.user?.id;

  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const cart = await getMyCart();

  return (
    <>
      <section>
        {/* Images Column */}
        <div className="grid grid-col-1 md:grid-cols-5">
          <div className="col-span-2">
            {/* Images Component */}
            <ProductImages images={product.images} />
          </div>
          {/* Details Column */}
          <div className="col-span-2 p-5">
            <div className="flex flex-col gap-6">
              <p>
                {product.brand} {product.category}
              </p>
              <h1 className="h3-bold">{product.name}</h1>
              <Rating value={Number(product.rating)} />
              <p>{product.numReviews} Reviews</p>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <ProductPrice
                  value={Number(product.price)}
                  className=" max-w-32 rounded-full bg-green-100 text-green-700 px-4 py-1"
                />
              </div>
            </div>
            <div className="mt-10">
              <p className=" font-semibold">Description</p>
              <p>{product.description}</p>
            </div>
          </div>
          {/* Action Column */}
          <div>
            <Card>
              <CardContent className="px-4">
                <div className="mb-2 flex justify-between">
                  <div>Price</div>
                  <div>
                    <ProductPrice value={Number(product.price)} />
                  </div>
                </div>
                <div className="mb-2 flex justify-between">
                  <div>Status</div>
                  {product.stock > 0 ? (
                    <Badge variant="outline">In Stock</Badge>
                  ) : (
                    <Badge variant="destructive">Out of Stock</Badge>
                  )}
                </div>
                {product.stock > 0 && (
                  <div className="flex-center">
                    <AddToCart
                      cart={cart}
                      item={{
                        productId: product.id,
                        name: product.name,
                        slug: product.slug,
                        price: product.price,
                        image: product.images![0],
                        qty: 1,
                      }}
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className=" mt-10">
        <h2 className="h3-bold">Customer Reviews</h2>
        <ReviewList
          userId={userId || ""}
          productId={product.id}
          productSlug={product.slug}
        />
      </section>
    </>
  );
};

export default ProductDetails;

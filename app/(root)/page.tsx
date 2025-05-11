import HeroSection from "@/components/heroSection";
import ProductList from "@/components/shared/product/productList";
import ViewAllProductsButton from "@/components/viewAllProductsButton";
import {
  // getFeaturedProducts,
  getLatestProducts,
} from "@/lib/actions/product.actions";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  // const featuredProducts = await getFeaturedProducts();

  return (
    <div>
      {/* {featuredProducts.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )} */}
      <HeroSection />

      <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
      <ViewAllProductsButton />
    </div>
  );
};

export default HomePage;

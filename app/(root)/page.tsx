import HeroSection from "@/components/heroSection";
import ProductList from "@/components/shared/product/productList";
import { getLatestProducts } from "@/lib/actions/product.actions";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <div>
      <HeroSection />
      <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
    </div>
  );
};

export default HomePage;

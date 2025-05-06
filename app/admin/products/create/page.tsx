import ProductForm from "@/components/admin/productForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Product",
};

const CreateProductPage = () => {
  return (
    <>
      <h2 className=" h3-bold">Create Product</h2>
      <div className="my-8">
        <ProductForm type="Create" />
      </div>
    </>
  );
};

export default CreateProductPage;

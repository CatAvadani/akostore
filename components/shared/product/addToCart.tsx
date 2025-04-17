"use client";
import { Button } from "@/components/ui/button";
import { addItemToCart } from "@/lib/actions/cart.actions";
import { CartItem } from "@/types";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const AddToCart = ({ item }: { item: CartItem }) => {
  const router = useRouter();

  const handleAddToCart = async () => {
    const res = await addItemToCart(item);

    if (!res.success) {
      toast.error(res.message);
      return;
    }
    // Handle success add to cart
    toast.success("Item added to cart", {
      description: "The item has been added to your cart successfully",
      action: {
        label: "View Cart",
        onClick: () => router.push("/cart"),
      },
    });
  };

  return (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      + Add to Cart
    </Button>
  );
};

export default AddToCart;

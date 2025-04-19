import { getMyCart } from "@/lib/actions/cart.actions";
import CartTable from "./cartTable";

export const metadata = {
  title: "Shopping Cart",
};

const Cart = async () => {
  const cart = await getMyCart();

  return (
    <div>
      <CartTable cart={cart} />
    </div>
  );
};

export default Cart;

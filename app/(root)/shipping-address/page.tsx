import { auth } from "@/auth";
import CheckoutSteps from "@/components/shared/checkoutSteps";
import { getMyCart } from "@/lib/actions/cart.actions";
import { getUserById } from "@/lib/actions/user.actions";
import type { ShippingAddress } from "@/types";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import ShippingAddressForm from "./shipingAddressFrom";

export const metadata: Metadata = {
  title: "Shipping Address",
};

const ShippingAddress = async () => {
  const cart = await getMyCart();

  if (!cart || cart.items.length === 0) redirect("/cart");

  const session = await auth();

  const userId = session?.user?.id;

  if (!userId) throw new Error("No user Id found");

  const user = await getUserById(userId);

  return (
    <>
      <CheckoutSteps current={1} />
      <ShippingAddressForm address={user.address as ShippingAddress} />
    </>
  );
};

export default ShippingAddress;

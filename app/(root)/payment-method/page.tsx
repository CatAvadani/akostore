import { auth } from "@/auth";
import CheckoutSteps from "@/components/shared/checkoutSteps";
import { getUserById } from "@/lib/actions/user.actions";
import { Metadata } from "next";
import PaymentMethodForm from "./paymentMethod";

export const metadata: Metadata = {
  title: "Select Payment Method",
};

const PaymentMethod = async () => {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) throw new Error("User not found");

  const user = await getUserById(userId);

  return (
    <div>
      <CheckoutSteps current={2} />
      <PaymentMethodForm preferredMethod={user.paymentMethod} />
    </div>
  );
};

export default PaymentMethod;

import { auth } from "@/auth";
import { getOrderById } from "@/lib/actions/order.actions";
import { Order, ShippingAddress } from "@/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Stripe } from "stripe";
import OrderDetailsTable from "./orderDetailsTable";

export const metadata: Metadata = {
  title: "Order Details",
};
const OrderDetails = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;
  const session = await auth();

  const order: Order = await getOrderById(id);
  if (!order) notFound();

  let client_secret = null;

  // Check is is not paid and using stripe
  if (order.paymentMethod === " Stripe" && !order.isPaid) {
    // Init stripe instance
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(Number(order.totalPrice) * 100),
      currency: "SEK",
      metadata: {
        orderId: order.id,
      },
    });
    client_secret = paymentIntent.client_secret;
  }
  return (
    <OrderDetailsTable
      order={{
        ...order,
        shippingAddress: order.shippingAddress as ShippingAddress,
      }}
      stripeClientSecret={client_secret}
      paypalClientId={process.env.PAYPAL_CLIENT_ID || "sb"}
      isAdmin={session?.user.role === "admin" || false}
    />
  );
};

export default OrderDetails;

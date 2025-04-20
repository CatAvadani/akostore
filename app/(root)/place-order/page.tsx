import CheckoutSteps from "@/components/shared/checkoutSteps";

const PlaceOrder = () => {
  return (
    <div>
      <CheckoutSteps current={3} />
      <h1 className="h3-bold text-center">PlaceOrder</h1>
    </div>
  );
};

export default PlaceOrder;

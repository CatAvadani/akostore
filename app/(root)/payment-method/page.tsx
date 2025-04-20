import CheckoutSteps from "@/components/shared/checkoutSteps";

const PaymentMethod = () => {
  return (
    <div>
      <CheckoutSteps current={2} />
      <h1 className=" h3-bold text-center">Payment Method</h1>
    </div>
  );
};

export default PaymentMethod;

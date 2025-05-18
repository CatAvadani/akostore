const StripePayment = ({
  priceInÖre,
  orderId,
  client_secret,
}: {
  priceInÖre: number;
  orderId: string;
  client_secret: string;
}) => {
  return <div>Stripe Form Payment</div>;
};

export default StripePayment;

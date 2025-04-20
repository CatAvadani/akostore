"use client";

import { DEFAULT_PAYMENT_METHOD } from "@/lib/constants";
import { paymentMethodSchema } from "@/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const PaymentMethodForm = ({
  preferredMethod,
}: {
  preferredMethod: string | null;
}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof paymentMethodSchema>>({
    resolver: zodResolver(paymentMethodSchema),
    defaultValues: {
      type: preferredMethod || DEFAULT_PAYMENT_METHOD,
    },
  });

  return <>Payment Form</>;
};

export default PaymentMethodForm;

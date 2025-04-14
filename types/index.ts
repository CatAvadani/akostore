import {
  cartItemSchema,
  insertItemSchema,
  insertProductSchema,
} from "@/lib/validators";
import { z } from "zod";

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: number;
  createdAt: Date;
};

export type Cart = z.infer<typeof insertItemSchema>;

export type CartItem = z.infer<typeof cartItemSchema>;

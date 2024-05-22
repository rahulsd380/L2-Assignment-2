import { z } from "zod";

const OrdersZodSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }),
  productId: z.string().min(1, { message: "Product ID is required" }),
  price: z.number(),
  quantity: z.number().min(1, { message: "Quantity is required" }),
});

export default OrdersZodSchema;

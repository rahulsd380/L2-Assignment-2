import { z } from "zod";

const ProductsZodSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string(),
  price: z.number().min(0.01, { message: "Price is required and must be greater than 0" }),
  category: z.string().min(1, { message: "Category is required" }),
  tags: z.array(z.string()),
  variants: z.array(
    z.object({
      type: z.string(),
      value: z.string(),
    })
  ),
  inventory: z.object({
    quantity: z.number(),
    inStock: z.boolean(),
  }),
});

export default ProductsZodSchema;

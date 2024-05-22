import express, { Request, Response } from "express";
import { ProductsRoutes } from "./modules/products/products.route";
import { OrderRoutes } from "./modules/orders/order.route";
const app = express();

// parsers
app.use(express.json());

app.use("/api/products", ProductsRoutes);
app.use("/api/orders", OrderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;

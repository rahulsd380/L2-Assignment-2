import express, { Request, Response } from 'express';
import { ProductsRoutes } from './modules/products/products.route';
const app = express();


app.use('/api/products', ProductsRoutes)

app.get('/', (req : Request, res : Response) => {
  res.send('Hello World!')
})

export default app;
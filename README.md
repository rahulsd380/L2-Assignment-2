# **E-Commerce Application**

This project is an e-commerce application developed using Express and TypeScript, with MongoDB as the database using Mongoose for data management. The project includes functionalities for managing products and orders, and integrates data validation using Zod.

## **Table of Contents**
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
  - [Product Management](#product-management)
  - [Order Management](#order-management)
- [Scripts](#scripts)
- [Error Handling](#error-handling)

## **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository.git
   cd your-repository
   npm i
   create .env file and connect to db

## **To run this project in local**
   npm run start:dev

## **Production Mode**
   npm run build
npm run start:prod

## **API Endpoints**
Create a New Product
Endpoint: /api/products
Method: POST

Retrieve a List of All Products
Endpoint: /api/products
Method: GET

Retrieve a Specific Product by ID
Endpoint: /api/products/:productId
Method: GET

Update Product Information
Endpoint: /api/products/:productId
Method: PUT

Delete a Product
Endpoint: /api/products/:productId
Method: DELETE

Search a Product
Endpoint: /api/products?searchTerm=iphone
Method: GET

## **Order Management**
Create a New Order
Endpoint: /api/orders
Method: POST

Retrieve All Orders
Endpoint: /api/orders
Method: GET

Retrieve Orders by User Email
Endpoint: /api/orders?email=level2@programming-hero.com
Method: GET


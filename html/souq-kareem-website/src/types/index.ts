export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  slug: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

export interface Order {
  id: string;
  userId: string;
  productIds: string[];
  totalAmount: number;
  orderDate: string;
}
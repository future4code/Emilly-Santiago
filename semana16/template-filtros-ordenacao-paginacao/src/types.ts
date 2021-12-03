import { type } from "os";

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Product = {
  id: string;
  name: string;
  image_url?: string;
  price: number;
};

export type Purchase = {
  id: string;
  user_id: string;
  quantity: number;
  product_id: string;
  total_price: number;
};

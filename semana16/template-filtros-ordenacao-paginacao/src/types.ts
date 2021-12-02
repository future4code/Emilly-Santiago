import { type } from "os";

export type user = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type product = {
  id: string;
  name: string;
  image_url?: string;
  price?: number;
};

export type purchase = {
  id: string;
  user_id: string;
  quantity: number;
  product_id: string;
  total_price?: number;
};

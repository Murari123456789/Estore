export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  color: string;
  stock: number;
  images: string[];
  ratings: Array<{
    star: number;
    comment: string;
    postedBy: string;
  }>;
  totalrating: number;
  featured?: boolean;
  newArrival?: boolean;
  isOnSale?: boolean;
  discountPercentage?: number;
}

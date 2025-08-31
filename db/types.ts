// This is sample types we are using before using Data from DB.

export interface Product {
  name: string;
  slug: string;
  category: string;
  description: string;
  images: string[];
  price: string;
  brand: string;
  rating: string;
  numReviews: number;
  stock: number;
  isFeatured: boolean;
  banner?: string; // optional since not all products have it
}
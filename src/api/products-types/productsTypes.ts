export interface Product {
  id: number;
  brand: string;
  category: string;
  title: string;
  description?: string;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
}

export interface Products {
  products: Product[];
}

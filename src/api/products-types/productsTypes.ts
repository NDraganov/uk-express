export interface Product {
  id: number;
  brand: string;
  category: string;
  title: string;
  description?: string;
  images: string[];
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  thumbnail: string;
}

export interface Products {
  products: Product[];
}

export interface Review {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string;
  };
}
export interface Reviews {
  comments: Review[];
}

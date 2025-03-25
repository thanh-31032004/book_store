import Category from "./category";

interface Product {
    _id: string;
    title: string;
    author: string;
    description: string;
    price: number;
    image: string;
    category: Category;
    stock: number;
    rating: number;
}

export default Product;
export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    image: string;
    description: string;
    details: string[];
    colors: string[];
    sizes: string[];
    isNew?: boolean;
    isLimited?: boolean;
}

export interface CartItem extends Product {
    quantity: number;
    selectedSize: string;
    selectedColor: string;
}

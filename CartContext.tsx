import { useState, createContext, useContext, ReactNode, useEffect } from 'react';
import { CartItem, Product } from '../types';

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product, size: string, color: string) => void;
    removeFromCart: (productId: string, size: string, color: string) => void;
    updateQuantity: (productId: string, size: string, color: string, quantity: number) => void;
    total: number;
    itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: Product, size: string, color: string) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id && item.selectedSize === size && item.selectedColor === color);
            if (existing) {
                return prev.map(item => 
                    (item.id === product.id && item.selectedSize === size && item.selectedColor === color)
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                );
            }
            return [...prev, { ...product, quantity: 1, selectedSize: size, selectedColor: color }];
        });
    };

    const removeFromCart = (productId: string, size: string, color: string) => {
        setCart(prev => prev.filter(item => !(item.id === productId && item.selectedSize === size && item.selectedColor === color)));
    };

    const updateQuantity = (productId: string, size: string, color: string, quantity: number) => {
        if (quantity < 1) return;
        setCart(prev => prev.map(item => 
            (item.id === productId && item.selectedSize === size && item.selectedColor === color)
            ? { ...item, quantity }
            : item
        ));
    };

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, total, itemCount }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within CartProvider');
    return context;
}

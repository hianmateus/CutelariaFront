import { useContext, createContext, useEffect, useState } from "react";

const CartContext = createContext({})

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([])
    const [productSelect, setProductSelect] = useState([])
    const [finalPrice, setFinalPrice] = useState(0);

    useEffect(() => {
        // Calcula o preço total sempre que o carrinho muda
        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc;
        }, 0);

        setFinalPrice(sumAllItems);
    }, [cartProducts]);
    

    const putProductInCart = (product) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);
    
        let newProductsInCart;
        if (cartIndex >= 0) {
            // Criar um novo array para evitar mutação direta do estado
            newProductsInCart = cartProducts.map((prd, index) =>
                index === cartIndex ? { ...prd, quantity: prd.quantity + 1 } : prd
            );
        } else {
            product.quantity = 1;
            newProductsInCart = [...cartProducts, product];
        }
    
        setCartProducts(newProductsInCart);
        upDateLocalStorage(newProductsInCart);
    };

    const selectProduct = (productId) => {
        const newProduct = cartProducts.map((prd) => prd.id = productId)

        setProductSelect(newProduct)

        console.log(productSelect)
    }

    const clearCart = () => {
        setCartProducts([])

        upDateLocalStorage([])
    }

    const deleteProduct = (productId) => {
        const newCart = cartProducts.filter((prd) => prd.id !== productId)

        setCartProducts(newCart)
        upDateLocalStorage(newCart)
    }

    const increaseProduct = (productId) => {
        setCartProducts((prevCart) => {
            const updatedCart = prevCart.map(prd => 
                prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd
            );
            upDateLocalStorage(updatedCart);
            return updatedCart;
        });
    };

    const decreaseProduct = (productId) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === productId)

        if (cartProducts[cartIndex].quantity > 1) {
            const newCart = cartProducts.map(prd => {
                return prd.id === productId ? { ...prd, quantity: prd.quantity - 1 } : prd
            })

            setCartProducts(newCart)
            upDateLocalStorage(newCart)
        } else {
            deleteProduct(productId)
        }
    }

    const upDateLocalStorage = (products) => {
        localStorage.setItem('cutelaria:cartInfo', JSON.stringify(products))
    }
    useEffect(() => {
        const clientCardData = localStorage.getItem('cutelaria:cartInfo')

        if(clientCardData) {
            setCartProducts(JSON.parse(clientCardData))
        }
    }, [])

    return (<CartContext.Provider value={{
        cartProducts, finalPrice, putProductInCart,
        clearCart, decreaseProduct,
        increaseProduct, deleteProduct,
        selectProduct
    }}>
        {children}
    </CartContext.Provider>

    )

}

export const useCart = () => {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error('useCart must be used with a context')
    }

    return context
}
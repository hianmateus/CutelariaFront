import { useContext, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useUser } from "../hooks/UserContext"; // Importando o contexto do usuário

const CartContext = createContext({});

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
    const { userInfo } = useUser();

    const [productSelect, setProductSelect] = useState([]);
    const [finalPrice, setFinalPrice] = useState(0);
    const [address, setAddressState] = useState(() => {
        const savedAddress = localStorage.getItem("address");
        return savedAddress ? JSON.parse(savedAddress) : {};
    });
    const [cartProducts, setCartProducts] = useState(() => {
        const storedCart = localStorage.getItem("cartProducts");
        return storedCart ? JSON.parse(storedCart) : [];
    });
    const [totalValues, setTotalValues] = useState({ weight: 0, price: 0 });
    const [activeCategory, setActiveCategory] = useState();  // **Adicionado aqui**
    const [typeProduct, setTypeProduct] = useState();  // **Adicionado aqui**


    useEffect(() => {
        const total = cartProducts.reduce(
            (acc, product) => {
                const pesoNumerico = product.info3 ? Number(product.info3.replace(',', '.')) : 0;
                acc.peso += pesoNumerico * product.quantity;
                acc.price += product.price * product.quantity;
                return acc;
            },
            { peso: 0, price: 0 }
        );
        setTotalValues(total);
    }, [cartProducts]);

    const setAddress = (newAddress) => {
        setAddressState(newAddress);
        localStorage.setItem("address", JSON.stringify(newAddress));
    };

    useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    }, [cartProducts]);

    useEffect(() => {
        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc;
        }, 0);
        setFinalPrice(sumAllItems);
    }, [cartProducts]);

    const putProductInCart = (product) => {
        if (!userInfo || !userInfo.email) { // Verifica se há um usuário logado
            toast.error("Você precisa estar logado para adicionar produtos ao carrinho!");
            return;
        }

        if (product.stock <= 0) {
            toast.error("Esse Produto esta sem Estoque");
            return;
        }

        const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);
        let newProductsInCart;
        if (cartIndex >= 0) {
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
        const newProduct = cartProducts.map((prd) => prd.id = productId);
        setProductSelect(newProduct);
    };

    const clearCart = () => {
        setCartProducts([]);
        setAddress({});
        localStorage.removeItem("cartProducts");
        localStorage.removeItem("address");
        upDateLocalStorage([]);
    };

    const deleteProduct = (productId) => {
        const newCart = cartProducts.filter((prd) => prd.id !== productId);
        setCartProducts(newCart);
        upDateLocalStorage(newCart);
    };

    const increaseProduct = (productId) => {
        setCartProducts((prevCart) => {
            const updatedCart = prevCart.map(prd => {
                if (prd.id === productId) {
                    // Verifica se a quantidade atual +1 não ultrapassa o estoque
                    if (prd.quantity < prd.stock) {
                        return { ...prd, quantity: prd.quantity + 1 };
                    } else {
                        toast.error("Estoque insuficiente para adicionar mais unidades deste produto.");
                    }
                }
                return prd;
            });

            upDateLocalStorage(updatedCart);
            return updatedCart;
        });
    };

    const decreaseProduct = (productId) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);
        if (cartProducts[cartIndex].quantity > 1) {
            const newCart = cartProducts.map(prd => {
                return prd.id === productId ? { ...prd, quantity: prd.quantity - 1 } : prd;
            });
            setCartProducts(newCart);
            upDateLocalStorage(newCart);
        } else {
            deleteProduct(productId);
        }
    };

    const upDateLocalStorage = (products) => {
        localStorage.setItem('cutelaria:cartInfo', JSON.stringify(products));
    };

    useEffect(() => {
        const clientCardData = localStorage.getItem('cutelaria:cartInfo');
        if (clientCardData) {
            setCartProducts(JSON.parse(clientCardData));
        }
    }, []);

    return (
        <CartContext.Provider value={{
            cartProducts, finalPrice, putProductInCart,
            clearCart, decreaseProduct,
            increaseProduct, deleteProduct,
            selectProduct, address, setAddress,
            totalValues, setTotalValues, activeCategory, setActiveCategory, // **Adicionado aqui**
            typeProduct, setTypeProduct
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used with a context');
    }
    return context;
};

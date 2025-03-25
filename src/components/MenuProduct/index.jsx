import { useEffect, useState } from 'react'
import { Main, General, CategoryMenu, ButtonClose, ProductsContainer, AcessoryContainer, CategoryName } from './styles'
import { api } from '../../services/api'
import { CardProduct } from '../CardProduct'
import { formatPrice } from '../../utils/formartPrice'
import { MenuSelect } from '../MenuSelect'

// eslint-disable-next-line react/prop-types
export function MenuProduct({ activeCategory, isBGVisible, setIsBGVisible, typeProduct }) {

    const [mapedProducts, MapedProducts] = useState([])
    const [products, setProducts] = useState([])
    const [selectMenu, setSelectMenu] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState([])

    useEffect(() => {

        async function loadProducts() {
            const { data } = await api.get('/products')

            const filteredProducts = data.map((product) => ({
                currencyValue: formatPrice(product.price), ...product,
            }))

            setProducts(filteredProducts)
        }

        loadProducts()

    }, [])

    useEffect(() => {
        if (activeCategory === 0) {
            MapedProducts(products);
        } else {
            const newFilteredProducts = products.filter(
                (product) => product.category_id === activeCategory
            );

            MapedProducts(newFilteredProducts);

        }
    }, [products, activeCategory]);


    return (

        <Main style={{
            display: isBGVisible ? 'flex' : 'none',
            justifyContent: "center",
            opacity: isBGVisible ? '1' : '0'
        }}>
            <MenuSelect selectMenu={selectMenu} setSelectMenu={setSelectMenu} selectedProduct={selectedProduct}/>

            <General>
                <ButtonClose onClick={() => setIsBGVisible(false)}>X</ButtonClose>

                <CategoryMenu>
                    <CategoryName>{typeProduct}</CategoryName>
                </CategoryMenu>

                <ProductsContainer>
                    {mapedProducts.filter(product => product.info2 === "Equipamento").filter(product => product.type === typeProduct)
                        .map(product => (
                            <CardProduct key={product.id} product={product} setSelectedProduct={setSelectedProduct}
                                setSelectMenu={setSelectMenu} selectMenu={selectMenu}/>
                        ))}
                </ProductsContainer>

                <h1>OUTROS ACESSÓRIOS</h1>

                <AcessoryContainer>
                    {mapedProducts.filter(product => product.info2 === "Acessorio")
                        .map(product => (
                            <CardProduct key={product.id} product={product} setSelectedProduct={setSelectedProduct}
                                setSelectMenu={setSelectMenu} />
                        ))}
                </AcessoryContainer>

            </General>

        </Main>
    )
}
import { useEffect, useState } from 'react'
import { Main, General, CategoryMenu, ButtonClose, ProductsContainer, AcessoryContainer, CategoryButton, InputProducts } from './styles'
import { api } from '../../services/api'
import { CardProduct } from '../CardProduct'
import { formatPrice } from '../../utils/formartPrice'
import { MenuSelect } from '../MenuSelect'

// eslint-disable-next-line react/prop-types
export function Menu({ activeCategory, setActiveCategory, isBGVisible, setIsBGVisible }) {

    const [categorias, setCategories] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [products, setProducts] = useState([])
    const [selectMenu, setSelectMenu] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState([])

    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {

        async function loadCategories() {
            const { data } = await api.get('/categories')

            setCategories(data)
        }

        async function loadProducts() {
            const { data } = await api.get('/products')

            const filteredProducts = data.map((product) => ({
                currencyValue: formatPrice(product.price), ...product,
            }))

            setProducts(filteredProducts)
        }

        loadProducts()
        loadCategories()

    }, [])

    useEffect(() => {
        if (activeCategory === 0) {
            setFilteredProducts(products);
        } else {
            const newFilteredProducts = products.filter(
                (product) => product.category_id === activeCategory
            );

            setFilteredProducts(newFilteredProducts);

        }
    }, [products, activeCategory]);


    // Função para atualizar o estado da pesquisa
    function handleSearch(event) {
        setSearchTerm(event.target.value);
    }

    return (

        <Main style={{
            display: isBGVisible ? 'flex' : 'none',
            justifyContent: "center",
            opacity: isBGVisible ? '1' : '0'
        }}>
            <MenuSelect selectMenu={selectMenu} setSelectMenu={setSelectMenu} selectedProduct={selectedProduct} />

            <General>
                <ButtonClose onClick={() => setIsBGVisible(false)}>X</ButtonClose>

                <CategoryMenu>
                    {categorias.map(category => (
                        <CategoryButton key={category.id}
                            $isActiveCategory={category.id === activeCategory}
                            onClick={() => {
                                setActiveCategory(category.id);
                                setSearchTerm('')
                            }}>
                            {category.name}
                        </CategoryButton>
                    ))}
                </CategoryMenu>

                <InputProducts
                    type="text"
                    placeholder="Encontre um Produto"
                    value={searchTerm}
                    onChange={handleSearch} // Chama a função ao digitar
                />

                <ProductsContainer>
                    {filteredProducts.filter(product => product.info2 === "Equipamento")
                        .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map(product => (
                            <CardProduct key={product.id} product={product} setSelectedProduct={setSelectedProduct}
                                setSelectMenu={setSelectMenu} selectMenu={selectMenu} />
                        ))}


                </ProductsContainer>

                <h1>OUTROS ACESSÓRIOS</h1>

                <AcessoryContainer>
                    {filteredProducts.filter(product => product.info2 === "Acessorio")
                        .map(product => (
                            <CardProduct key={product.id} product={product} setSelectedProduct={setSelectedProduct}
                                setSelectMenu={setSelectMenu} />
                        ))}
                </AcessoryContainer>

            </General>

        </Main>
    )
}
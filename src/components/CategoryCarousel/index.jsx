import { useEffect, useState } from 'react'
import { api } from '../../services/api'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import { Container, Title, ContainerItens, P1, ClickDiv } from './styles'
import { useCart } from "../../hooks/CartContext";

import AOS from 'aos'
import 'aos/dist/aos.css'

// eslint-disable-next-line react/prop-types
export function CategoryCarousel({ setIsBGVisible }) {
    const { setActiveCategory } = useCart();
    const [categorias, setCategories] = useState([])

    useEffect(() => {

        async function loadCategories() {
            const { data } = await api.get('/categories')

            setCategories(data)
        }

        loadCategories()

    }, [])

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    useEffect(() => {
        AOS.init({
        });
    }, [])

    return (
        <div>
            <Container>

                <Title data-aos="flip-right" data-aos-duration="800">CATEGORIAS</Title>

                <Carousel
                    responsive={responsive}
                    infinite={true}
                    partialVisible={false}
                    dotListClass="custom-list-style"
                    itemClass='carousel-item'
                >
                    {categorias.map((category) => (
                        <ContainerItens
                            data-aos="fade-left"
                            key={category.id}
                            $imageUrl={category.url}
                        >
                            <ClickDiv onClick={() => {
                                setIsBGVisible(true)
                                setActiveCategory(category.id)
                            }}></ClickDiv>
                            <P1>{category.name}</P1>
                        </ContainerItens>
                    ))}
                </Carousel>

            </Container>
        </div>
    )
}
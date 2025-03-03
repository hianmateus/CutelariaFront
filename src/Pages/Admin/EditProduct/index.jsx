import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Image } from '@phosphor-icons/react'
import * as yup from "yup"
import { api } from '../../../services/api'
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react"

const schema = yup
    .object({
        name: yup.string().required('Digite o nome do Produto'),
        price: yup.number().positive().required('Digite o preço do Produto').typeError('Digite o preço do Produto'),
        category: yup.object().required('Escolha uma Categoria'),
        offer: yup.bool(),
        desc: yup.string().required('Escreva a Descrição'),
        type: yup.string(),
        info1: yup.string().required('Escreva a informação'),
        info2: yup.string().required('Defina o tipo do Equipamento'),
        info3: yup.string().required('Digite o Peso do Produto'),
        info4: yup.string(),

    })

import {
    General, Form, TopForm, InputGroup,
    Label, Input, InputUpload, Select, SubmitButton,
    ErrorMessage, ChekBoxDiv
} from "./styles"
import { toast } from "react-toastify"

export function EditProduct() {
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    const { state: { product } } = useLocation()

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories')

            setCategories(data)
        }

        loadCategories()
    }, [])

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = async (data) => {
        const productFormData = new FormData()

        productFormData.append('name', data.name)
        productFormData.append('price', data.price)
        productFormData.append('category_id', data.category.id)
        productFormData.append('file', data.file[0])
        productFormData.append('desc', data.desc)
        productFormData.append('type', data.type)
        productFormData.append('info1', data.info1)
        productFormData.append('info2', data.info2)
        productFormData.append('info3', data.info3)
        productFormData.append('info4', data.info4)
        productFormData.append('offer', data.offer)

        await toast.promise(api.put(`/products/${product.id}`, productFormData), {
            pending: 'Editando Produto...',
            success: 'Produto Editado com Sucesso!',
            error: 'Falha ao Editar o Produto'
        })

        console.log(product.offer)

        setTimeout(() => {
            navigate('/admin/produtos')
        }, 1700);
    }


    return (
        <General>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <TopForm>
                    <InputGroup>
                        <Label>Nome</Label>
                        <Input type="text" {...register("name")} placeholder="Nome do Produto" defaultValue={product.name} />
                        <ErrorMessage>{errors?.name?.message}</ErrorMessage>
                    </InputGroup>

                    <InputGroup>
                        <Label>Preço</Label>
                        <Input type="number" {...register("price")} placeholder="Preço Padrão" defaultValue={product.price} />
                        <ErrorMessage>{errors?.price?.message}</ErrorMessage>
                    </InputGroup>

                    <InputGroup>
                        <Label>Descrição</Label>
                        <Input type="text" {...register("desc")} placeholder="Descrição Simplificada" defaultValue={product.desc} />
                        <ErrorMessage>{errors?.desc?.message}</ErrorMessage>
                    </InputGroup>

                    <InputGroup>
                        <Label>Informação</Label>
                        <Input type="text" {...register("info1")} placeholder="Informação Adicional" defaultValue={product.info1} />
                        <ErrorMessage>{errors?.info1?.message}</ErrorMessage>
                    </InputGroup>

                    <InputGroup>
                        <Label>Tipo</Label>
                        <Input type="text" {...register("type")} placeholder="Ex: Acabamento, Secador, Profissional..." defaultValue={product.type} />
                        <ErrorMessage>{errors?.type?.message}</ErrorMessage>
                    </InputGroup>

                    <InputGroup>
                        <Label>Peso</Label>
                        <Input type="text" {...register("info3")} placeholder="Ex: 0,060 ou 5,00 KG" defaultValue={product.info3} />
                        <ErrorMessage>{errors?.info3?.message}</ErrorMessage>
                    </InputGroup>

                    <InputGroup>
                        <Label>Tipo de Equipamento</Label>
                        <Input type="text" {...register("info2")} placeholder="Equipamento ou Instrumento" defaultValue={product.info2} />
                        <ErrorMessage>{errors?.info2?.message}</ErrorMessage>
                    </InputGroup>

                    <InputGroup>
                        <Label>LinkMC</Label>
                        <Input type="text" {...register("info4")} placeholder="URL no MercadoLivre" defaultValue={product.info4} />
                        <ErrorMessage>{errors?.info4?.message}</ErrorMessage>
                    </InputGroup>

                </TopForm>
                <InputGroup>
                    <InputUpload>
                        <Image />
                        <input
                            type="file"
                            {...register("file")}
                            accept="image/png, image/jpeg"
                            onChange={(value) => {
                                setFileName(value?.target.files[0]?.name)
                                register('file').onChange(value)
                            }}
                        />

                        {fileName || "Upload do Produto"}
                    </InputUpload>

                    <ErrorMessage>{errors?.file?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <ChekBoxDiv>
                        <input type="checkbox" defaultChecked={product.offer} {...register("offer")} />
                        <Label>Produto em Oferta</Label>
                    </ChekBoxDiv>
                </InputGroup>

                <InputGroup>
                    <Label>Categoria</Label>
                    <Controller
                        name="category"
                        control={control}
                        defaultValue={product.category}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={categories}
                                getOptionLabel={(category) => category.name}
                                getOptionValue={(category) => category.id}
                                placeholder="Categorias"
                                menuPortalTarget={document.body}
                                defaultValue={product.category}
                            />
                        )} />

                    <ErrorMessage>{errors?.category?.message}</ErrorMessage>
                </InputGroup>



                <SubmitButton>Salvar Alterações</SubmitButton>

            </Form>
        </General>
    )
}
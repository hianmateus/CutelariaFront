import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Image } from '@phosphor-icons/react'
import * as yup from "yup"
import { api } from '../../../services/api'

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    name: yup.string().required('Digite o nome do Produto'),
    price: yup.number().positive().required('Digite o preço do Produto').typeError('Digite o preço do Produto'),
    category: yup.object().required('Escolha uma Categoria'),
    offer: yup.bool(),
    file: yup.mixed().test('required', 'Escolha um Arquivo', value => {
      return value && value.length > 0;
    }).test('fileSize', 'Carregue arquivos até 5mb', value => {
      return value && value.length > 0 && value[0].size <= 300000
    }).test('type', 'Apenas imagens PNG ou JPEG', value => {
      return value && value.length > 0 && (value[0].type === 'image/jpeg' || value[0].type === 'image/png')
    }),
    desc: yup.string().required('Escreva a Descrição'),
    type: yup.string().required('Defina o Equipamento'),
    info1: yup.string().required('Escreva a informação'),
    info2: yup.string().required('Defina o tipo do Equipamento'),
    info3: yup.string().required('Digite o Peso do Produto'),
    info4: yup.string().required('Escreva o Link para o MercadoLivre'),

  })

import {
  General, Form, TopForm, InputGroup,
  Label, Input, InputUpload, Select, SubmitButton,
  ErrorMessage, ChekBoxDiv
} from "./styles"
import { toast } from "react-toastify"

export function NewProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

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
    productFormData.append('name', data.price)
    productFormData.append('category_id', data.category.id)
    productFormData.append('file', data.file[0])
    productFormData.append('desc', data.desc)
    productFormData.append('type', data.type)
    productFormData.append('info1', data.info1)
    productFormData.append('info2', data.info2)
    productFormData.append('info3', data.info3)
    productFormData.append('info4', data.info4)
    productFormData.append('offer', data.offer)

    await toast.promise(api.post('/products', productFormData), {
      pending: 'Adicionando Produto...',
      success: 'Produto Criado com Sucesso!',
      error: 'Falha ao Adicionar o Produto'
    })

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
            <Input type="text" {...register("name")} placeholder="Nome do Produto" />
            <ErrorMessage>{errors?.name?.message}</ErrorMessage>
          </InputGroup>

          <InputGroup>
            <Label>Preço</Label>
            <Input type="number" {...register("price")} placeholder="Preço Padrão" />
            <ErrorMessage>{errors?.price?.message}</ErrorMessage>
          </InputGroup>

          <InputGroup>
            <Label>Descrição</Label>
            <Input type="text" {...register("desc")} placeholder="Descrição Simplificada" />
            <ErrorMessage>{errors?.desc?.message}</ErrorMessage>
          </InputGroup>

          <InputGroup>
            <Label>Informação</Label>
            <Input type="text" {...register("info1")} placeholder="Informação Adicional" />
            <ErrorMessage>{errors?.info1?.message}</ErrorMessage>
          </InputGroup>

          <InputGroup>
            <Label>Tipo</Label>
            <Input type="text" {...register("type")} placeholder="Ex: Acabamento, Secador, Profissional..." />
            <ErrorMessage>{errors?.type?.message}</ErrorMessage>
          </InputGroup>

          <InputGroup>
            <Label>Peso</Label>
            <Input type="text" {...register("info3")} placeholder="Ex: 0,060 ou 5,00 KG" />
            <ErrorMessage>{errors?.info3?.message}</ErrorMessage>
          </InputGroup>

          <InputGroup>
            <Label>Tipo de Equipamento</Label>
            <Input type="text" {...register("info2")} placeholder="Equipamento ou Instrumento" />
            <ErrorMessage>{errors?.info2?.message}</ErrorMessage>
          </InputGroup>

          <InputGroup>
            <Label>LinkMC</Label>
            <Input type="text" {...register("info4")} placeholder="URL no MercadoLivre" />
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
            <input type="checkbox" {...register("offer")} />
            <Label>Produto em Oferta</Label>
          </ChekBoxDiv>
        </InputGroup>

        <InputGroup>
          <Label>Categoria</Label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
                placeholder="Categorias"
                menuPortalTarget={document.body}
              />
            )} />

          <ErrorMessage>{errors?.category?.message}</ErrorMessage>
        </InputGroup>

        <SubmitButton>Adicionar Produto</SubmitButton>

      </Form>
    </General>
  )
}
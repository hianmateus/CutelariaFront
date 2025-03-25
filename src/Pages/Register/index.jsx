import { General, ConteinerRight, ConteinerLeft, Form, InputContainer, Link, PLink } from "./styles";
import { Button } from "../../components";
import LogoImage from '../../assets/imgs/Logo2.svg'

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom";
import * as yup from "yup"
import { toast } from 'react-toastify'
import { api } from "../../services/api";

import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

export function Register() {
    const navigate = useNavigate()

    useEffect(() => {
        AOS.init({
        });
    }, [])

    const schema = yup
        .object({
            name: yup.string().required('O nome é obrigatorio!'),
            email: yup.string().email('Digite um email válido').required('O email é obrigatorio!'),
            password: yup.string().min(6, 'A senha deve ter no mínimo 6 carecteres').required('A senha é obrigatoria!'),
            confirmPassword: yup.string().oneOf([yup.ref('password')], 'As Senhas devem ser iguais!').required('Confirme sua senha'),
        })
        .required()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = async (data) => {

        try {
            const { status } =
                await api.post('/users', {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                },
                    {
                        validateStatus: () => true,
                    },)

            if (status === 200 || status === 201) {
                setTimeout(() => {
                    navigate('/login')
                }, 1700);
                toast.success('Conta criada com Sucesso! Seja Bemvindo(a)')
            } else if (status === 409) {
                toast.error('Email já Cadastrado! Faça o Login para continuar')
            } else {
                throw new Error()
            }
            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            toast.error('Falha no Sistema! Tente novamente')
        }
    }

    const handleLogoClick = () => {
        navigate('/');
    }

    return (
        <General>
            <ConteinerRight>
                <img src={LogoImage} alt="" onClick={handleLogoClick} data-aos="zoom-in" data-aos-duration="900" />
            </ConteinerRight>

            <ConteinerLeft>
                <h2 data-aos="fade-down" data-aos-duration="800"><span>Criar Conta</span></h2>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer data-aos="fade-down" data-aos-delay="300" data-aos-duration="800">
                        <label>Nome</label>
                        <input type="text" {...register("name")} />
                        <p>{errors?.name?.message}</p>

                    </InputContainer>

                    <InputContainer data-aos="fade-down" data-aos-delay="400" data-aos-duration="800">
                        <label>Email</label>
                        <input type="email" {...register("email")} />
                        <p>{errors?.email?.message}</p>

                    </InputContainer>

                    <InputContainer data-aos="fade-down" data-aos-delay="500" data-aos-duration="800">
                        <label>Senha</label>
                        <input type="password" {...register("password")} />
                        <p>{errors?.password?.message}</p>

                    </InputContainer>

                    <InputContainer data-aos="fade-down" data-aos-delay="600" data-aos-duration="800">
                        <label>Confimar Senha</label>
                        <input type="password" {...register("confirmPassword")} />
                        <p>{errors?.confirmPassword?.message}</p>

                    </InputContainer>
                    <Button>Criar Conta</Button>
                </Form>

                <PLink>Ja possui Conta? <Link to='/login'>Clique aqui.</Link></PLink>

            </ConteinerLeft>
        </General>
    )
}
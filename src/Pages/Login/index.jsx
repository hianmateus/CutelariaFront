import { General, ConteinerRight, ConteinerLeft, Form, InputContainer, PLink, Link } from "./styles";
import { Button } from "../../components";
import LogoImage from '../../assets/imgs/Logo2.svg'

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { toast } from 'react-toastify'
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";

import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

export function Login() {
    const navigate = useNavigate()
    const { putUserData } = useUser()

    useEffect(() => {
        AOS.init({
        });
    }, [])

    const schema = yup
        .object({
            email: yup.string().email('Digite um email válido').required('O email é obrigatorio!'),
            password: yup.string().min(6, 'A senha deve ter no mínimo 6 carecteres').required('A senha é obrigatoria!'),
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
            const { data: userData } = await toast.promise(
                api.post('/session', {
                    email: data.email,
                    password: data.password,
                }),
                {
                    pending: 'Verificando Dados...',
                    success: {
                        render() {
                            setTimeout(() => {
                                if (userData?.admin) {
                                    navigate('/admin/pedidos')
                                } else {
                                    navigate('/')
                                }

                            }, 1500);
                            return 'Seja Bem vindo(a)'
                        },
                    },
                },
            )
            putUserData(userData)
        } catch (error) {
            console.error('Erro na requisição:', error)
            toast.error('Email ou Senha Incorretos!')
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
                <h2 data-aos="fade-down" data-aos-duration="800">Olá, seja bem vindo a <span>Cutelaria Pets!</span> Acesse com seu <span>Login e senha.</span></h2>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer data-aos="fade-down" data-aos-delay="300" data-aos-duration="800">
                        <label>Email</label>
                        <input type="email" {...register("email")} />
                        <p>{errors?.email?.message}</p>

                    </InputContainer>

                    <InputContainer data-aos="fade-down" data-aos-delay="400" data-aos-duration="800">
                        <label>Senha</label>
                        <input type="password" {...register("password")} />
                        <p>{errors?.password?.message}</p>

                    </InputContainer>
                    <Button>Entrar</Button>
                </Form>

                <PLink>Não possui conta? <Link to='/cadastro'>Clique aqui.</Link></PLink>

            </ConteinerLeft>
        </General>
    )
}
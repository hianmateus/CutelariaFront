import { useState } from "react";  // Para gerenciar o estado do endereço
import { Banner, Content, General, Title, Contentpat1, Containerinfo, HeaderTop, TitleHeader, InfoLocate, Label, Input, Saveinfo, PInput } from "./styles"
import { Credits, CartResume } from "../../components";
import LogoImage from '../../assets/imgs/ModeloLogo3.png'
import { useForm } from "react-hook-form";

export function Order() {
    const { register, handleSubmit, setValue, setFocus, reset } = useForm();
    const [address, setAddress] = useState({});
    const [visivelInfo, setVisivelInfo] = useState(true)

    const onSubmit = (data) => {
        setAddress(prevAddress => ({
            ...prevAddress,
            ...data
        }));
        setVisivelInfo(false)
    };

    const ChangeInfo = () => {
        
        reset({
            cep: "",
            state: "",
            city: "",
            neighborhood: "",
            street: "",
            complemento: ""
        });

        setVisivelInfo(true)
    };

    const CheckCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then(data => {
                setValue('street', data.logradouro);
                setValue('neighborhood', data.bairro);
                setValue('city', data.localidade);
                setValue('state', data.uf);
                setFocus('complemento');
            });
    };

    return (
        <General>
            <Banner to='/'>
                <img src={LogoImage} alt="Logo-image-png"></img>
            </Banner>

            <Title>Chekout - Finalizar Pedido</Title>

            <Content>
                <Contentpat1>
                    <Containerinfo>
                        <HeaderTop>
                            <TitleHeader>Endereço de Entrega</TitleHeader>
                        </HeaderTop>

                        <InfoLocate onSubmit={handleSubmit(onSubmit)}
                            style={{ display: visivelInfo ? 'flex' : 'none' }}>
                            <Label>
                                Cep:
                                <Input type="text" {...register("cep")} onBlur={CheckCEP}></Input>
                            </Label>
                            <Label>
                                Estado:
                                <Input type="text" {...register("state")}></Input>
                            </Label>
                            <Label>
                                Cidade:
                                <Input type="text" {...register("city")}></Input>
                            </Label>
                            <Label>
                                Bairro:
                                <Input type="text" {...register("neighborhood")}></Input>
                            </Label>
                            <Label>
                                Rua:
                                <Input type="text" {...register("street")}></Input>
                            </Label>
                            <Label>
                                Complemento:
                                <Input type="text" {...register("complemento")}></Input>
                            </Label>

                            <Saveinfo type="submit">Salvar Informações</Saveinfo>
                        </InfoLocate>

                        <InfoLocate onSubmit={handleSubmit(ChangeInfo)}
                            style={{ display: visivelInfo ? 'none' : 'flex' }}>
                            <Label>
                                Cep:
                                <PInput>{address.cep}</PInput>
                            </Label>
                            <Label>
                                Estado:
                                <PInput>{address.state}</PInput>
                            </Label>
                            <Label>
                                Cidade:
                                <PInput>{address.city}</PInput>
                            </Label>
                            <Label>
                                Bairro:
                                <PInput>{address.neighborhood}</PInput>
                            </Label>
                            <Label>
                                Rua:
                                <PInput>{address.street}</PInput>
                            </Label>
                            <Label>
                                Complemento:
                                <PInput>{address.complemento}</PInput>
                            </Label>

                            <Saveinfo type="submit">Alterar Endereço</Saveinfo>
                        </InfoLocate>
                    </Containerinfo>

                </Contentpat1>
                <CartResume address={address} />
            </Content>
            <Credits />
        </General>
    );
}

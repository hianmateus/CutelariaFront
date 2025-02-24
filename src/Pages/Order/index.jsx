import { useState } from "react";
import { Banner, Content, General, Title, Contentpat1, Containerinfo, HeaderTop, TitleHeader, InfoLocate, Label, Input, Saveinfo, PInput } from "./styles";
import { Credits, CartResume } from "../../components";
import LogoImage from '../../assets/imgs/ModeloLogo3.png';
import { useForm } from "react-hook-form";
import { useCart } from '../../hooks/CartContext';

export function Order() {
    const { register, handleSubmit, setValue, setFocus, reset } = useForm();
    const { address, setAddress, totalValues } = useCart();
    const [visivelInfo, setVisivelInfo] = useState(true);
    const [deliveryTax, setDeliveryTax] = useState(0);

    // Função para obter coordenadas do CEP usando OpenStreetMap (Nominatim)
    const getCoordinates = async (cep) => {
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${cep}, Brazil`);
            const data = await response.json();

            if (data.length > 0) {
                return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
            }
            return null;
        } catch (error) {
            console.error("Erro ao obter coordenadas:", error);
            return null;
        }
    };

    // Função para calcular a distância entre dois pontos (fórmula de Haversine)
    const calculateDistance = (coord1, coord2) => {
        const toRad = (value) => (value * Math.PI) / 180;
        
        const R = 6371; // Raio da Terra em km
        const dLat = toRad(coord2.lat - coord1.lat);
        const dLon = toRad(coord2.lon - coord1.lon);
        
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(toRad(coord1.lat)) * Math.cos(toRad(coord2.lat)) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2);
        
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        
        return R * c; // Retorna distância em km
    };

    // Função para calcular o frete com base na distância e peso total dos produtos
    const calculateShipping = async (cepDestino) => {
        const cepOrigem = "58071-120"; // CEP fixo de origem
        const coordOrigem = await getCoordinates(cepOrigem);
        const coordDestino = await getCoordinates(cepDestino);

        if (!coordOrigem || !coordDestino) {
            console.error("Não foi possível obter as coordenadas dos CEPs.");
            return;
        }

        const distance = calculateDistance(coordOrigem, coordDestino);

        // Definição do valor do frete baseado na distância e peso dos produtos
        let shippingCost = 10; // Valor base do frete
        if (distance > 50) shippingCost += 5;
        if (distance > 100) shippingCost += 10;
        if (totalValues.peso > 5) shippingCost += 8; // Se o peso for maior que 5kg, adiciona mais taxa
        if (totalValues.peso > 10) shippingCost += 15; // Se for maior que 10kg, adiciona mais ainda

        console.log(`Distância: ${distance.toFixed(2)} km`);
        console.log(`Peso Total: ${totalValues.peso.toFixed(2)} kg`);
        console.log(`Preço Total: R$ ${totalValues.price.toFixed(2)}`);
        console.log(`Valor do Frete: R$ ${shippingCost.toFixed(2)}`);

        setDeliveryTax(shippingCost);
    };

    // Ao enviar os dados, salvar o endereço e calcular o frete
    const onSubmit = async (data) => {
        setAddress({ 
            cep: data.cep,  
            state: data.state,
            city: data.city,
            neighborhood: data.neighborhood,
            street: data.street,
            complemento: data.complemento
        });

        console.log("Calculando frete...");
        await calculateShipping(data.cep);
        
        setVisivelInfo(false);
    };

    // Alterar as informações do endereço
    const ChangeInfo = () => {
        reset({
            cep: "",
            state: "",
            city: "",
            neighborhood: "",
            street: "",
            complemento: ""
        });

        setVisivelInfo(true);
    };

    // Buscar endereço pelo CEP usando a API ViaCEP
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

            <Title>Checkout - Finalizar Pedido</Title>

            <Content>
                <Contentpat1>
                    <Containerinfo>
                        <HeaderTop>
                            <TitleHeader>Endereço de Entrega</TitleHeader>
                        </HeaderTop>

                        <InfoLocate onSubmit={handleSubmit(onSubmit)} style={{ display: visivelInfo ? 'flex' : 'none' }}>
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

                        <InfoLocate onSubmit={handleSubmit(ChangeInfo)} style={{ display: visivelInfo ? 'none' : 'flex' }}>
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

                {/* Passando o valor de frete e o estado de loading para o CartResume */}
                <CartResume address={address} deliveryTax={deliveryTax} setDeliveryTax={setDeliveryTax} />
            </Content>

            <Credits />
        </General>
    );
}

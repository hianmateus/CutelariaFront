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

// Função para buscar latitude e longitude de um CEP
const getCoordinates = async (cep) => {
    try {
        cep = cep.replace(/\D/g, ''); // Remove espaços e caracteres não numéricos

        if (cep.length !== 8) {
            throw new Error(`CEP inválido: ${cep}`);
        }

        // Buscar cidade e estado do CEP via ViaCEP
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.ok) throw new Error("Erro na requisição ao ViaCEP");

        const data = await response.json();
        if (data.erro) throw new Error("CEP não encontrado");

        // Buscar coordenadas da cidade via OpenStreetMap
        const geoResponse = await fetch(`https://nominatim.openstreetmap.org/search?city=${data.localidade}&state=${data.uf}&country=Brasil&format=json`);
        if (!geoResponse.ok) throw new Error("Erro ao buscar coordenadas");

        const geoData = await geoResponse.json();
        if (geoData.length === 0) throw new Error("Coordenadas não encontradas");

        return {
            latitude: parseFloat(geoData[0].lat),
            longitude: parseFloat(geoData[0].lon)
        };
    } catch (error) {
        console.error("Erro ao buscar coordenadas:", error.message);
        return null;
    }
};

// Função para calcular a distância entre dois pontos (Fórmula de Haversine)
const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Raio da Terra em km
    const toRad = (value) => (value * Math.PI) / 180;

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};

// Função para calcular o frete com base na distância e no peso dos produtos
const calculateFreight = (distance, weight) => {
    const baseRate = 10; // Taxa base de frete
    const distanceRate = 0.03; // Custo por km
    const weightRate = 2; // Custo por kg

    return baseRate + (distance * distanceRate) + (weight * weightRate);
};

const onSubmit = async (data) => {
    setAddress({ 
        cep: data.cep,  
        state: data.state,
        city: data.city,
        neighborhood: data.neighborhood,
        street: data.street,
        complemento: data.complemento
    });

    const cepOrigem = "58071-120"; // CEP de origem
    const cepDestino = data.cep; // CEP do usuário


    const origem = await getCoordinates(cepOrigem);
    const destino = await getCoordinates(cepDestino);

    if (origem && destino) {
        const distance = calculateDistance(origem.latitude, origem.longitude, destino.latitude, destino.longitude);

        // peso dos produtos do totalValues
        const weight = totalValues.peso;

        // Calculando o frete
        const freightCost = calculateFreight(distance, weight);

        // Atualizar estado do frete
        setDeliveryTax(freightCost);
    }

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

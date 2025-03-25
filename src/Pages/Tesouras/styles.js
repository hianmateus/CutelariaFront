import styled from "styled-components";
import BackGround1 from '../../assets/imgs/Tesouras/BackGround1.png'


export const General = styled.div`
    min-height: 100vh;
    max-width: 100vw;
    position: relative;
`

export const Black = styled.b`
    color: #ffdd00;
`

export const Section1 = styled.section`
    background: url('${BackGround1}');
    background-size: cover;
    background-position: center;
    height: 85vh;
    background-color:rgb(50, 50, 50);
    position: relative;
`

export const Sec1Span = styled.div`
    position: absolute;
    bottom: 200px;
    left: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 400px;

    @media (max-width: 650px) {
        left: 15px;
        width: 95%;
        }

    h1{
        color: white;
        border-bottom: solid;
        text-shadow: 0 0 13px black;

        @media (max-width: 650px) {
        text-align: center;
        }
    }

    p{
        color:rgb(184, 184, 184);
    }

    div{
        display: flex;
        gap: 15px;
    }
`

export const AboutSteel = styled.button`
    height: 50px;
    width: 170px;
    border-radius: 4px;
    background: linear-gradient(321deg, rgb(112 74 0) 0%, rgb(17 17 17) 76%);
    color: #ffdd00;
    font-weight: 600;
    font-size: 15px;
`

export const AboutBlade = styled.button`
    height: 50px;
    width: 170px;
    border-radius: 4px;
    background: linear-gradient(321deg, rgb(67 39 0) 0%, rgb(255 181 0) 101%);
    color: #ffffff;
    font-weight: 600;
    font-size: 15px;
`


export const Section2 = styled.section`
    min-height: 65vh;
    background-color: rgb(29, 29, 29);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    gap: 80px;
    padding: 80px 0;
`

export const InfoCuidados = styled.div`
    width: 615px;
    padding: 13px;
    border: dashed 3px rgb(255, 208, 0);

    @media (max-width: 650px) {
        width: 90%;
    }

        .InfoSec2{
            color:rgb(255, 208, 0);
            text-align: center;
        }
`

export const Sec2Info = styled.div`
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
    justify-content: center;

    div{
    width: 220px;
    background-color: rgb(52 52 52);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 58px 12px 12px 12px;
    gap: 10px;

    

    h5{
        color: white;
        font-size: 21px;
    }
    p{
        color: white;
        font-size: 12px;
    }
    }
`

export const Section3 = styled.section`
    height: 50vh;
    background-color:rgb(37, 37, 37);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    div{
        display: flex;
        flex-direction: column;
        gap: 25px;

        p{
            color: white;
            text-align: center;
            font-weight: 500;
            text-shadow: 0 0 12px white;
        }
    }
`

export const Img1 = styled.img`
    width: 534px;

    @media (max-width: 650px) {
        display: none;
    }
`

export const Img2 = styled.img`
    width: 534px;

    @media (max-width: 650px) {
        display: none;
    }
`

export const Section4 = styled.section`
    min-height: 75vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color:rgb(0, 0, 0);
    gap: 100px;
    padding: 80px 0;

    h3{
        color: white;
        font-size: 30px;
        text-align: center;
        width: 800px;

        @media (max-width: 650px) {
            width: 95%;
            font-size: 25px;
    }
    }

    .Sec4p{
        color:rgb(241, 241, 241);
        width: 700px;
        text-align: center;
        font-size: 20px;

        @media (max-width: 650px) {
        width: 90%;
    }
    }
`

export const BladesTypes = styled.div`
    display: flex;
    gap: 25px;

    @media (max-width: 650px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const TypeBlade = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    justify-content: center;
    width: 200px;
`

export const DivBlade = styled.div`
    height: 160px;
    width: 160px;
    border: solid 3px yellow;
    border-radius: 500px;
    position: relative;
    overflow: hidden;

    img{
        position: absolute;
        width: 131px;
        right: 0;
        bottom: 0;
    }
`

export const PBlade = styled.p`
    color: white;
    width: 200px;
    text-align: center;
`


export const Section5 = styled.section`
    min-height: 75vh;
    background-color:rgb(29, 29, 29);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 80px;
    padding: 60px 0 120px 0;

    h2{
        color: white;
        font-size: 30px;
    }
`

export const MarksBlade = styled.div`
    display: flex;
    gap: 45px;

    @media (max-width: 650px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const MarkDiv = styled.div`
    width: 210px;
    height: 260px;
    background-color: #313131;
    border-radius: 12px;
    border: solid 4px #ffcd00;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    cursor: pointer;

    .ImageMarkDiv{
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        background-color: #272727;

        &:hover{
            opacity: 0;
        }

        img{
        width: 130px;

        @media (max-width: 980px) {
        width: 190px;
  }
    }
    }

    .DescMark{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;

        img{
            width: 45%;
        }

        p{
            text-align: center;
            font-size: 14px;
            font-weight: 700;
            width: 95%;
            color: #ffcd00;
        }
    }
`


export const Section6 = styled.section`
    min-height: 95vh;
    background-color:rgb(0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Sec6Part1 = styled.div`
    display: flex;
    gap: 50px;

    @media (max-width: 650px) {
        flex-wrap: wrap;
        justify-content: center;
        padding: 80px 0;
    }
`

export const BladeTS = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 220px;
    cursor: pointer;
    
    .WhitePoint{
        background-color: white;
        height: 30px;
        width: 30px;
        border-radius: 500px;
        margin-bottom: 45px;
    }
`

export const DivImageTS = styled.div`
    padding: 25px;
    border: solid 3px #ffe900;
    border-radius: 12px;
    width: 220px;
    margin-bottom: 20px;

    img{
        width: 100%;
    }
`

export const TitleTS = styled.div`
    color: #ffba00;
    font-size: 19px;
    font-weight: 600;
    margin-bottom: 9px;
`

export const DescTS = styled.div`
    color: white;
    text-align: center;
    font-weight: 500;
`


export const Section7 = styled.section`
    background-color:rgb(29, 29, 29);
    padding: 80px 0 155px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 70px;
`

export const IconParagrafo = styled.img`
    width: 20px;
`

export const SteelDiv = styled.div`
    background-color: black;
    min-height: 396px;
    width: 900px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 650px) {
        width: 95%;
        flex-wrap: wrap;
        justify-content: center;
        padding: 8px;
    }
`

export const ImagemTS = styled.img`
    width: 44%;

    @media (max-width: 650px) {
        width: 60%;
    }
`

export const SpanSteel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 18px;
    gap: 23px;

    h2{
        color: #ffd600;
        font-weight: 500;
        text-align: center;
    }

    p{
        color: #ffd600;
        font-size: 15px;
        display: flex;
        align-items: center;
        gap: 8px;
    }
`

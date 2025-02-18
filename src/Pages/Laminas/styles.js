import styled from "styled-components";
import BackGround1 from '../../assets/imgs/Laminas/BackGround1.png'

export const General = styled.div`
    min-height: 100vh;
    max-width: 100vw;
    position: relative;
`

export const Section1 = styled.section`
    background: url('${BackGround1}');
    height: 85vh;
    width: 100%;
    position: relative;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: end;
    padding-right: 228px;
    background-position: center;

    @media (max-width: 980px) {
        justify-content: center;
        padding-right: 0;
  }
`

export const Span1 = styled.section`
    width: 420px;
    
    h1{
        color: white;
        font-size: 30px;
        border-bottom: solid 3px;
        padding-bottom: 5px;
        margin-bottom: 15px;

        @media (max-width: 980px) {
            font-size: 25px;
            text-align: center;
  }
    }

    section{
        width: 290px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 13px;

        p{
            color: white;
            text-align: center;
            font-size: 20px;
            line-height: 20px;
        }
        div{
            display: flex;
            gap: 12px;
        }
    }

    @media (max-width: 980px) {
        display: flex;
        flex-direction: column;
        align-items: center;
  }
`

export const ButtonM = styled.button`
    color: white;
    background-color: gray;
    height: 35px;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-weight: 600;
    background: linear-gradient(141deg, rgba(147,147,147,1) 29%, rgba(69,69,69,1) 100%);

    &:hover{
        background: linear-gradient(220deg, rgba(147,147,147,1) 29%, rgba(69,69,69,1) 100%);
    }
`

export const ButtonC = styled.button`
    background-color: #e3e3e3;
    height: 35px;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-weight: 600;
    background: linear-gradient(220deg, rgb(215 215 215) 29%, rgb(139 139 139) 100%);

    &:hover{
    background: linear-gradient(140deg, rgb(215 215 215) 29%, rgb(139 139 139) 100%);
    }
`
// SECTION 2

export const Section2 = styled.section`
    min-height: 70vh;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    h1{
        font-size: 30px;
        font-weight: bold;

        @media (max-width: 980px) {
        margin-bottom: 50px;

  }
    }

    @media (max-width: 980px) {
        padding: 50px 0;
  }
`

export const DivMarks = styled.div`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
`

export const MarkInfo = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 250px;
    width: 200px;
    cursor: pointer;

    img{
        width: 130px;

        @media (max-width: 980px) {
        width: 190px;
  }
    }
`

// SECTION 3

export const Section3 = styled.section`
    height: 60vh;
    width: 100%;
    background-color:rgb(11, 11, 11);
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;

    p{
        color: white;
        text-shadow: 0 0 8px white;
        width: 625px;
        text-align: center;
        font-weight: 600;
        font-size: 19px;
    }
`

// SECTION 4

export const Section4 = styled.section`
    min-height: 60vh;
    width: 100%;
    padding: 30px 0;

`

// SECTION 5

export const Section5 = styled.section`
    min-height: 60vh;
    width: 100%;
    background-color: #222222;
    padding: 30px 0;

`

// SECTION 6

export const Section6 = styled.section`
    min-height: 60vh;
    width: 100%;
    background-color:rgb(0, 0, 0);
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 25px;

    h3{
        color: #ffe900;
        text-align: center;
        font-size: 23px;
        width: 430px;
        font-weight: 500;
        text-shadow: 0 0 17px;
    }

    p{
        color: white;
        text-align: center;
        font-size: 18px;
        font-weight: 600;
        width: 470px;
    }

`

// SECTION 7

export const Section7 = styled.section`
    min-height: 120vh;
    width: 100%;
    background-color: #222222;
    padding: 30px 0;

`

import styled from "styled-components";
import BackGround1 from '../../assets/imgs/Laminas/BackGround1.png'
import BackGround2 from '../../assets/imgs/Laminas/BackGround2.png'

export const General = styled.div`
    min-height: 100vh;
    max-width: 100vw;
    position: relative;
`

export const Section1 = styled.section`
    background: url('${BackGround1}');
    background-size: cover;
    height: 100vh;
    width: 100%;
    position: relative;
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
    background: url('${BackGround2}');
    background-size: cover;
    height: 60vh;
    width: 100%;
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
    padding: 80px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`

export const AboutBlades = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    margin-bottom: 120px;

    h2{
        text-align: center;
    }
`

export const TypeBlades = styled.div`
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    div{
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 230px;
        align-items: center;

        img{
            width: 80%;
        }

        p{
            text-align: center;
            font-weight: 600;
            span{
                color: #ffd100;
            }
        }
    }
`

export const BladesCategory = styled.div`
    display: flex;
    gap: 30px;
`

export const BladeType = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 260px;
    gap: 80px;
    cursor: pointer;

    .BlackPoint{
        height: 30px;
        width: 30px;
        border-radius: 500px;
        background-color: black;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
        
        img{
        width: 80%;
        }

        h3{
            font-weight: bold;
        }

        p{
            text-align: center;
            font-weight: 600;
        }
    }
    
`

// SECTION 5

export const Section5 = styled.section`
    min-height: 80vh;
    width: 100%;
    background-color: #1e1e1e;
    padding: 40px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    
    img{
        width: 30%;
    }

    div{
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 30%;
        span{
            color: white;
            font-weight: 600;
            font-size: 20px;
        }
    }

`

// SECTION 6

export const Section6 = styled.section`
    background-color: black;
    min-height: 50vh;
    width: 100%;
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;

    img{
        width: 300px;
    }

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
    padding: 200px 0px 80px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .Sec17 {
        width: 95%;
        height: 50vh;
        margin-bottom: 120px;
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px 45px;

        img{
            width: 300px;
        }

        div{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 20px;
            p{
                width: 40%;
                font-size: 15px;
                display: flex;
                flex-direction: column;
                .TileLM{
                    color: #fecb00;
                    font-size: 16px;
                    font-weight: 600;
                    width: 100%;
                }
                color: white;
            }
        }
    }

    .Sec27 {
        width: 95%;
        height: 50vh;
        margin-bottom: 120px;
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px 45px;

        img{
            width: 300px;
        }

        div{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 20px;
            p{
                width: 40%;
                font-size: 15px;
                display: flex;
                flex-direction: column;
                .TileLC{
                    color: #24ff00;
                    font-size: 16px;
                    font-weight: 600;
                    width: 100%;
                }
                color: white;
            }
        }
    }

`

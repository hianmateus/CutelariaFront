import styled from "styled-components";

export const Root = styled.table`
    border-collapse: collapse;
    background-color: white;
    border-radius: 20px;
    position: relative;
`

export const Header = styled.thead``

export const Tr = styled.tr``

export const Th = styled.th`
    padding: 10px;
    text-align: center;
    color: #fff;
    background-color: #484848;
    border-bottom: 1px solid #cdcdcd;

    &:first-child{
        border-top-left-radius: 20px;
    }
    &:last-child{
        border-top-right-radius: 20px;
    }
`

export const Td = styled.td`
    padding: 10px;
    color: #484848;
    font-weight: 500;
    line-height: 115%;
    width: 150px;
    text-align: center;

    &:last-child{
        width: 80px;
    }
`
export const Body = styled.tbody`
`


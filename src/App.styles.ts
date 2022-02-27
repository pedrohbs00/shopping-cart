import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton"
import Button from '@mui/material/Button';

type CheckoutDivProps = {
    finish: boolean;
}

export const Wrapper = styled.div`
    margin: 40px;

    .ProductsTitle {
        display: flex;
        justify-content: center;
        margin: 40px 0;
    }

    .ProductsTitle h2 {
        font-size: 30px;
        font-weight: bold;
        font-family: 'Montserrat', sans-serif;;
    }

`;

export const StyledButton = styled(IconButton)`
    position: fixed !important ;
    z-index: 100;
    right: 20px;
    top: 40%;
`;

export const ProgressDiv = styled.div`
    display: flex;
    margin: auto;
    height: 100vh;
    align-items:center;
    justify-content:center;
`;

export const CheckoutDiv = styled.div<CheckoutDivProps>`
    display: ${props => props.finish ? "flex" : "none"} !important;
    position: fixed !important;
    top: 0;
    width: 100%;
    height: 100%;

    .AlertBackground {
        display: flex;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        position: relative;
        align-items: center;
        justify-content: center;
    }

    .Alert {
        display: flex;
        width: 275px;
        height: 275px;
        border-radius: 10px;
        background-color: black;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    p {
        color: white;
        font-weight: bold;
        font-size: 30px;
        font-family: 'Montserrat', sans-serif;
    }
`;

export const Navbar = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    position: sticky;
    top: 0;

    .Header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 50px;
    }

    h2 {
        color: white;
        font-family: 'Montserrat', sans-serif;
    }

    ul {
        display: flex;
        align-items: center;
        padding: 0;
    }

    li {
        color: white;
        font-family: 'Montserrat', sans-serif;
        list-style: none;
        margin: 0 20px;
        font-weight: 500;
    }

    a {
        text-decoration: none;
        color: white;
    }

    .images {
        display: flex;
        align-items: center;
    }

    img {
        height: 30px;
        width: 40px;
        margin: 0 10px;
    }
`;

export const Welcome = styled.div`

    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid lightgrey;
    margin: 0 40px;

    .Welcome h2{
        font-family: 'Montserrat', sans-serif;
        text-align: center;
        font-weight: bold;
        font-size: 20px;
    }

`;

export const CartMenuButton = styled(Button)`
    font-family: 'Montserrat', sans-serif !important;
    font-weight: 500 !important;
    color: white !important;
    text-transform: initial !important;
    padding: 0 !important;
`;
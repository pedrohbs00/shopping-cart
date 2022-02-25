import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton"

type CheckoutDivProps = {
    finish: boolean;
}

export const Wrapper = styled.div`
    margin: 40px;

    .ProductsTitle {
        display: flex;
        justify-content: center;
        margin-top: 60px;
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
    top: 15%;
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
    flex-direction: row;
    background-color: black;
    position: fixed;
    top: 0;
    z-index: 1;
    padding: 0 40px;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    h2 {
        color: white;
        font-family: 'Montserrat', sans-serif;
    }

    ul {
        display: flex;
        align-items: center;
    }

    li {
        color: white;
        font-family: 'Montserrat', sans-serif;
        list-style: none;
        
    }
`;
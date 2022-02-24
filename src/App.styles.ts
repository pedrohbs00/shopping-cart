import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton"

type CheckoutDivProps = {
    finish: boolean;
}

export const Wrapper = styled.div`
    margin: 40px;
`;

export const StyledButton = styled(IconButton)`
    position: fixed !important ;
    z-index: 100;
    right: 20px;
    top: 20px;
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
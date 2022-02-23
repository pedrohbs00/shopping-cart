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
    display: ${props => props.finish ? "block" : "none"} !important;
    position: fixed;
    background-color: red;
    display: flex;
    margin: auto;
    align-items:center;
    justify-content:center;
    width: 200px;
    height: 200px;
`;
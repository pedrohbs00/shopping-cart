import styled from "styled-components";
import Button from "@material-ui/core/Button";


export const Wrapper = styled.aside`
    font-family: Arial, Helvetica, sans-serif;
    padding: 20px;
    height: 100vh;
    flex-direction: column;
    display: flex;
    
    .cartTitle {
        display: flex;
        justify-content: space-between;
    }

    .cartTitle h2 {
        font-family: 'Montserrat', sans-serif;
    }

    .NoItems {
        margin: auto;
        text-align: center;
    }

    .NoItems p {
        color: rgba(0, 0, 0, 0.26);
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
    }

    .CartFooter {
        margin-top: auto;
    }

    .total {
        display: flex;
        justify-content: flex-end;
    }

    .finishbutton {
        display: flex;
        margin-top: 5px;
        margin-bottom: 10px;
    }
`;

export const FinishShopButton = styled(Button)`
    background-color: black !important;
    width: 100%;
    
    
    p {
        text-transform: initial !important;
        margin: 5px 2px 5px 2px;
        color: white;
        font-weight: bold;
    }

`;
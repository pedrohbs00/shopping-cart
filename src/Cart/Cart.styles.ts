import styled from "styled-components";
import Button from "@material-ui/core/Button";


export const Wrapper = styled.aside`
    font-family: Arial, Helvetica, sans-serif;
    width: 500px;
    padding: 20px;

    .cartTitle {
        display: flex;
        justify-content: space-between;
    }

    p {
        text-align: center;
    }

    .total {
        display: flex;
        justify-content: flex-end;
    }

    .finishbutton {
        display: flex;
        //justify-content: center;
        margin-top: 5px;
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
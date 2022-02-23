import styled from "styled-components";
import Button from "@material-ui/core/Button";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from "@material-ui/icons/Add";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    border-bottom: 1px solid lightgrey;
    padding-bottom: 20px;

    div {
        flex: 1;
    }

    .information, .buttons {
        display: flex;
    }

    .information {
        justify-content: space-around;
    }

    .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        max-width: 80px;
        object-fit: contain;
        margin-left: 40px;
    }

    .amount {
        display: flex;
        max-width: 45px;
        height: 28px;
        border-top: 1px solid lightgrey;
        border-bottom: 1px solid lightgrey;
        align-items: center;
        justify-content: center;
    }

    .amount p {
        margin: 0;
    }
`;

export const  AddRemoveButton = styled(Button)`
    padding: 0 !important;
    min-width: 30px !important;
    height: 30px;
    justify-content: center;

`;

export const  StyledRemoveIcon = styled(RemoveIcon)`
    width: 10px;
    height: 10px;
`;

export const  StyledAddIcon = styled(AddIcon)`
    width: 10px;
    height: 10px;
`;
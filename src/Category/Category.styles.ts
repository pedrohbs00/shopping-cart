import styled from "styled-components";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";


export const MenuButton = styled(Button)`
    color: white !important;
    font-family: 'Montserrat', sans-serif !important;
    font-weight: 500 !important;
    text-transform: initial !important;
    padding: 0 !important;
`;

export const StyledMenu = styled(Menu)`
    //transform: translateX(-50px) !important;
`;

export const StyledMenuItem = styled(MenuItem)`
    font-weight: 500 !important;
    font-family: 'Montserrat', sans-serif !important;
    
`;
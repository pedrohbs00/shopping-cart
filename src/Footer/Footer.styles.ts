import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";

export const StyledFooter = styled.div`
    display: flex;
    background-color: black;
    margin-top: auto;
    padding: 30px 60px;
    font-family: 'Montserrat', sans-serif;
    justify-content: space-between;

    .ProjectCard {
        display: flex;
        flex-direction: column;
        align-content: space-between;
    }

    .ProjectLink {
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;
    }

    p {
        color: white;
        margin-top: auto;
    }

    .LinksCard {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .LinksTitle h3{
        color: white;
        margin-top: 0;
    }

    .Links a {
        margin: 10px 10px;
    }
`;

export const GitHub = styled(GitHubIcon)`
    color: white;
    margin-right: 10px;
`;
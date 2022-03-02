import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    border: 1px solid lightgray;
    border-radius: 20px;
    height: 100%;
    background-color: white;

    button {
        border-radius: 0 0 20px 20px;
        background-color: black;
        color: white;
        font-weight: bold;
        z-index: 0;
    }

    button:hover {
        background-color: black;
        opacity: 0.9;
    }

    img {
        max-height: 250px;
        object-fit: contain;
        border-radius: 20px 20px 0 0;
        margin-top: 10px;
    }

    .ItemTexts {
        font-family: 'Roboto Serif', sans-serif;
        padding: 1rem;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .ItemTitle {
        text-align: center;
    }

    .ItemTexts p {
        margin: 0 0 10px 0;
        text-align: justify;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        max-height: 7.2rem;
        line-height: 1.2em;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
    }

    .Rating {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    .RatingDisplay {
        position: initial;
    }

    .Rating p {
        margin: 0;
    }

    .Description p::after {
        content: "...";
    }

    .Price {
        margin-top: auto;
        margin-bottom: 0;
        text-align: center;
    }
`;

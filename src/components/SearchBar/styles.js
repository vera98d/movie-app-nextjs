import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: static;
    width: 50%;
    gap: .6em;
    z-index: 300;
    
    @media screen and (min-width: 620px) {
        position: relative;
    }
`;

export const SearchBoxContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    right: ${(props) => props.isvisible === "true" ? "0" : "-2.3em"};
    width: ${(props) => props.isvisible === "true" ? "100vw" : "0"};
    height: 7vh;
    padding: .8em 1.2em;
    background-color: ${(props) => props.theme.colors.backgroundBlue};
    transition: all .5s ease-in-out;
    border-bottom: 2px solid ${(props) => props.theme.colors.secondaryBlue};

    &>input{
        width: 90%;
        padding: .6em 1em;
        font-size: 1rem;
        font-family: 'Roboto' sans-serif;
        font-weight: 700;
        background-color: ${(props) => props.theme.colors.backgroundBlue};
        color: ${(props) => props.theme.colors.lightBlue};
        border: 0;
    }

    &>input::placeholder {
        color: ${(props) => props.theme.colors.lightTextBlue};
        opacity: 1;
        font-weight: 500;
    }

    &>input::-ms-input-placeholder { 
        color: ${(props) => props.theme.colors.secondaryBlue};
    }
    
    &>input:focus {
        outline: none;
    }

    @media screen and (min-width: 620px) {
        display: flex;
        position: static;
        justify-content: flex-start;
        width: ${(props) => props.isvisible === "true" ? "40vw" : "0"};
        max-width: 450px;
        height: 4.5vh;
        padding: .6em 0;
        background-color: transparent;
        border: ${(props) =>
        props.isvisible === "true"
            ? `2px solid ${props.theme.colors.lightTextBlue}`
            : "none"};
        border-radius: .8em;

        &>input{
            background-color: transparent;
            font-size: .8rem;

        }
    }
`;

export const SearchIcon = styled(BiSearch)`
    color: ${(props) => props.theme.colors.secondaryBlue};
    display: block;
    font-size: 1.5rem;;
    cursor: pointer;
`;

export const CloseIcon = styled(AiOutlineClose)`
    display: block;
    color: ${(props) => props.theme.colors.lightTextBlue};
    font-size: 1.4rem;
    cursor: pointer;
    z-index: 100;
`;
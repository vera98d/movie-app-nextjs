import styled from "styled-components";

export const Container = styled.div`
    display: ${(props) =>
        props.isvisible === "true" ? "flex" : "none"};
    flex-direction: column;
    gap: .5em;
    position: absolute;
    top: 7vh;
    left:0;
    width:100vw;
    height: 93vh;
    padding: 1em;
    background-color: ${(props) => props.theme.colors.backgroundBlue};
    z-index: 200;
    color: white;
    overflow-y: scroll;

    &::-webkit-scrollbar{
        display: none;
    }

    @media screen and (min-width: 620px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1em 1.2em;
        padding: 4em;
    }
`;

export const SearchResult = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    gap: .4em;
    cursor: pointer;

    @media screen and (min-width: 620px) {
        flex-direction: column;
        align-items: center;
        width: 6em;
        height: auto;
        text-align: center;
    }
`;

export const SearchResultDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: .4em;

    &  p {
        font-size: .8rem;
    }

    &  span {
        color: ${(props) => props.theme.colors.lightGrey};
    }

   `;
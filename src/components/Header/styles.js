import styled from "styled-components";

export const HeaderStyled = styled.header`
    width:100%;
    height: 7vh;
    margin: 0em auto;
    padding: 1.4em 2.6em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(12,7,47);
    background: ${(props) => props.theme.colors.gradient};

`;

export const LogoContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .4em;
    cursor: pointer;

    & h3{
        color: ${(props) => props.theme.colors.primaryBulue};
    }

    & span{
        margin-left: .1em;
        color: ${(props) => props.theme.colors.secondaryBlue};
    }
`;
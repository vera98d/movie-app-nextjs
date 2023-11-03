import styled from 'styled-components';
import Image from 'next/image';
import { OverlayContent, Overlay } from "../components/GlobalComponents/styles";

export const Container = styled.main`
  position: relative;
  width: 100%;
  min-height: 93vh;
  margin: 0 auto;
  background: ${(props) => props.theme.colors.gradient};
  padding-bottom: .8em;

  & span{
        font-weight: bold;
      }

  & p{
      font-size: 0.8rem;
      color: white;
  }

  @media (min-width: 420px) or (orientation: landscape)
  {
      & p{
        font-size: 1rem;
      }
  }
`;

export const HeaderStyled = styled.header`
  width: 100vw;
  margin: 0 auto;
  position: relative;

  & h2{
      text-transform: uppercase;
  }  
`;

export const HeaderImgContainer = styled.div`
  width: 100%;
  height: 50vh;
  overflow: hidden;
  position: relative;
  overflow: hidden;

  @media (min-width: 720px) or (orientation: landscape)
    {
        height: 55vh;
    }

  @media (min-width: 1050px) or (orientation: landscape)
  {
      height: 60vh;
  }
`;

export const Img = styled(Image)`
  object-fit: cover;
  object-position: center;
`;

export const Overlay2 = styled(Overlay)`
  width: 100%;
  padding: .8em 1em;
  
  @media (min-width: 720px) or (orientation: landscape)
    {
        height: 55vh;
    }

  @media (min-width: 1050px) or (orientation: landscape)
  {
      height: 60vh;
  }
  
`;

export const OverlayContent2 = styled(OverlayContent)`
  width: 100%;
  max-width: ${(props) => props.theme.colors.maxWidth};
  padding: .8em 1em; 
  left: 50%;
  transform: translateX(-50%);
    
  & h4 {
    font-weight: normal;
  }

  & h5 {
    font-weight: normal;
    color: ${(props) => props.theme.colors.lightGrey};
  }

  & p {
   color: #242424;
  }

  & > :nth-child(1) {
    margin-bottom: .2em;
  }

  & > :nth-child(2) {
    margin-bottom: .8em;
  }
  
  @media (min-width: 720px) or (orientation: landscape)
    {
        bottom: 5%;

    }
`;

export const PosterContainer = styled.div`
  width: 7.5em;
  height: 11em;
  overflow: hidden;
  flex-shrink: 0;
  position: relative;

  @media (min-width: 580px) or (orientation: landscape)
    {
      width: 9em;
      height: 13em;
    }

    @media (min-width: 720px) or (orientation: landscape)
    {
      width: 14em;
      height: 19em;
    }

    @media (min-width: 920px) or (orientation: landscape)
    {
      width: 14.5em;
      height: 21em;
    }

`;

export const DetailsSection = styled.div`
  display: grid;
  grid-template-columns: minmax(80px, auto) minmax(60%, 1fr);
  grid-gap: .3em .6em;
  max-width: ${(props) => props.theme.colors.maxWidth};
  margin: 0 auto;
  padding: .8em;

  & div:nth-child(3){
    grid-column: 1 / 3;
  }

  & p:nth-child(odd) {
    font-weight: bold;
    color: ${(props) => props.theme.colors.lightTextBlue};
  }
   & span{
    color: ${(props) => props.theme.colors.secondaryBlue};
    font-size: 1.2rem;
   }

  @media (min-width: 720px) or (orientation: landscape)
    {
      grid-gap: .3em 1.2em;
      padding-right: 1.6em;

      & div:nth-child(1){
        grid-row: 1 / 3;
      }

      & div:nth-child(2){
        order: 2;
        grid-row: 2 / 3;
      }

      & div:nth-child(3){
        order: 1;
        grid-column: auto;
        grid-row: 1 / 2;
      }

    }

`;

export const DetailedInformation = styled.div`
  display: grid;
  grid-template-columns: minmax(80px, auto) minmax(60%, 1fr);
  grid-gap: .6em .6em;
  padding-right: .2em;
  align-content: center;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: .4em;
  justify-content: center;
  line-height: 130%;

 @media (min-width: 720px) or (orientation: landscape)
    {
        padding: 0;
    }
`;

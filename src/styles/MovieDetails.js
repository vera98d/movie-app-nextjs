import styled from 'styled-components';
import Image from 'next/image';
import { OverlayContent, Overlay } from "../components/GlobalComponents/styles";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background: rgb(12,7,47);
  background: ${(props) => props.theme.colors.gradient};
  padding-bottom: 2em;

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
  padding: .8em 1em;
  
    
  & h4 {
    font-weight: normal;
  }

  & h5 {
    font-weight: normal;
    color: rgba(255,255,255,0.75);
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
        left: 10%;
        bottom: 5%;
    }
`;

export const DetailsSection = styled.section`
  width: 100%;
  margin: 0 auto;
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

export const Description = styled.div`
  margin: 0 auto;
  max-width: 1050px;
  padding: 0 1em;
  line-height: 130%;

 @media (min-width: 720px) or (orientation: landscape)
    {
        padding: 0 2em;
    }
`;
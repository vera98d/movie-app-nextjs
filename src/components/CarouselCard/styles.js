import styled from "styled-components";
import { AiTwotoneStar } from 'react-icons/ai';
import Image from 'next/image';

export const CardCountainer = styled.div`
    width: 100vw;
    margin: 0 auto;
    position: relative;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 45vh;
  overflow: hidden;
  position: relative;

  @media (min-width: 768px) or (orientation: landscape)
 {
    height: 93vh;
  }
`;

export const Img = styled(Image)`
  object-fit: cover;
  object-position: center;
`;

export const Overlay = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
`;

export const OverlayContent = styled.div`
    position:absolute;
    bottom:0;
    left:0;
    width:90%;
    height: 40%;
    padding: 1.5em 1em;
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    & h1, h3{
        color: white;
    }

    & h1{
        font-weight: bold;
        text-transform: uppercase;
        text-align: left;
        cursor: pointer;
    }

    @media (min-width: 580px) or (orientation: landscape)
    {
        & h1{
            font-size: 2.8rem;
        }
    }
    @media (min-width: 720px) or (orientation: landscape)
    {
        padding: 2.5em 2em;
        width:45%;

        & h1{
            font-size: 3.2rem;
        }
    }

    @media (min-width: 1050px) or (orientation: landscape)
    {
        padding: 3.5em 3em;
        width:40%;
        
        & h1{
            font-size: 4rem;
        }
    }

`;

export const Icon = styled(AiTwotoneStar)`
    display: block;
    margin: auto;
    color: #FFC000;
`;

export const RetesContainer = styled.div`
    display: flex;
    align-items: 'center';
    gap: .5em;
`;


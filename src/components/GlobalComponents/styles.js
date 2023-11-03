import styled from 'styled-components';
import Link from 'next/link';
import { AiTwotoneStar } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import { MdHowToVote } from 'react-icons/md';

export const SectionTitle = styled.h3`
  color: white;
`;

export const StyledRouterLink = styled(Link)`
  display: contents;
  text-decoration: none;
`;

export const Overlay = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    min-height: 50vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
`;

export const OverlayContent = styled.div`
    position:absolute;
    bottom:0;
    left:0;
    width:60%;
    height: 50%;
    padding: 1.5em 1em;
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    & h1, h2, h3, h4, h5{
        color: white;
    }

    & h1{
        font-weight: bold;
        text-transform: uppercase;
        text-align: left;
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
        width: 45%;

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

export const FlexRowContainer = styled.div`
    display: flex;
    align-items: 'center';
    justify-content: center;
    gap: .3em;

    & > :nth-child(3) {
    margin-left: 1.2em;
  }
`;

export const FlexRowContainerLeft = styled.div`
    max-width: 1020px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 1em;
    padding: .8em .6em;

    @media (min-width: 720px) or (orientation: landscape)
    {
      gap: 3em;
      padding: 1.2em 2em;

    }
`;

export const FlexColContainer = styled(FlexRowContainerLeft)`
    flex-direction: column;
    align-items: 'center';
    justify-content: flex-start;
    gap: .8em;
`;

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: 'center';
    justify-content: flex-start;
    gap: 1.3em;
`;

export const DetailsContainerCol = styled(DetailsContainer)`
    flex-direction: column;
    gap: .6em;
    justify-content: center;
    
    & p{
      display: inline-block;
      }
    
`;

export const IconStar = styled(AiTwotoneStar)`
    display: block;
    margin: auto;
    color: #FFC000;
    font-size: 1.4em;
`;


export const IconTime = styled(BiTime)`
    display: block;
    margin: auto;
    color: rgba(225,225,255,0.75);
`;

export const IconVotes = styled(MdHowToVote)`
    display: block;
    margin: auto;
    color: #FFC000;
    font-size: 1.4em;
`;

export const NoCoverPoster = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: black;
  height: 100%;
  transition: transform 0.55s ease;
  cursor: pointer;

  & p{
        font-size: .9rem;
    }

    & p, h2{
        color: ${(props) => props.theme.colors.primaryBulue};
        font-weight: bold;
    }

    & span{
        margin-left: .1em;
        color: ${(props) => props.theme.colors.secondaryBlue};
    }
`;
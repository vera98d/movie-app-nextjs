import styled from 'styled-components';
import Image from 'next/image';

export const PosterContainer = styled.div`
  width: ${(props) =>
    props.size === "small" ? "3.5em" : "6em"};
  height: ${(props) =>
    props.size === "small" ? "4.5em" : "9em"};
  overflow: hidden;
  flex-shrink: 0;
  position: relative;

  &:hover img {
    transform: scale(1.1);
  }

  & .poster{
    object-fit: cover;
    transition: transform 0.55s ease;
    cursor: pointer;
  }

  @media (min-width: 580px) or (orientation: landscape)
  {
    width: ${(props) => props.size === "small" ? "6em" : "8em"};
    height: ${(props) => props.size === "small" ? "9em" : "12em"};
  }
`;

export const Poster = styled(Image)`
  object-fit: cover;
  transition: transform 0.55s ease;
  cursor: pointer;
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
        color: ${(props) => props.theme.colors.primaryBulue};
        font-weight: bold;
        font-size: .9rem;
    }

    & span{
        margin-left: .1em;
        color: ${(props) => props.theme.colors.secondaryBlue};
    }

    &:hover {
    transform: scale(1.1);
  }
`;
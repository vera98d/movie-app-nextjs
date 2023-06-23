import styled from 'styled-components';
import Image from 'next/image';

export const PosterContainer = styled.div`
  width: 6em;
  height: 9em;
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
      width: 8em;
      height: 12em;
    }
`;

export const Poster = styled(Image)`
  object-fit: cover;
  transition: transform 0.55s ease;
  cursor: pointer;
`;

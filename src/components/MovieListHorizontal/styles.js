import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 .3em;
`;

export const CardScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const MovieList = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.2em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: .3em;
  transition: .5s;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
display: none;
}
`;

export const ButtonContainerLeft = styled.div`
  width: 2em;
  height: 2em;
  position: absolute;
  top:50%; 
  left:0;
  z-index:100;
  -ms-transform: translate(0, -40%);
  transform: translate(0, -40%);
`;

export const ButtonContainerRight = styled(ButtonContainerLeft)`
  right: 0;
  left: auto;
`;

export const ButtonElement = styled.div`
  width: 100%;
  height:100%;
  flex-shrink: 0;
  background: ${(props) => props.theme.colors.primaryBulue};
  color: white;
  font-weight: bold;
  cursor: pointer;
  display:flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

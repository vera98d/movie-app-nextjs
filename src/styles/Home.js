import styled from 'styled-components';

export const Container = styled.main`
  margin: 0 auto;
  width: 100%;
  background: rgb(37,22,80);
  background: ${(props) => props.theme.colors.gradient};

  & > * {
    margin-bottom: 1.2em;
  }
`;
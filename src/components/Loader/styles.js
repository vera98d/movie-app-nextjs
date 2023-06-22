import styled from "styled-components";

export const CenteredContainer = styled.main`
  width: 100%;
  height: 100vh;
  display:flex;
  justify-content: center;
  align-items: center;
  background: rgb(12,7,47);
  background: ${(props) => props.theme.colors.gradient};
`;
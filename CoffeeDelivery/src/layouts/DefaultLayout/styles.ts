import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: calc(100vw - 10rem);
  height: calc(100vh - 6rem);
  margin: 3rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme.background};
  
  display: flex;
  flex-direction: column;
`
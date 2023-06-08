import styled from "styled-components"

export const ButtonContainer = styled.button`
  border: 0;
  padding: 0.5rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
    
  cursor: pointer;

  background: ${(props) => props.theme["base-button"]};
`
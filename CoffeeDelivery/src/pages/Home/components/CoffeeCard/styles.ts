import styled from "styled-components"

export const CoffeeCountainer = styled.div`
/*   background: ${props => props.theme["base-card"]};
 */
  background: black;

  width: 16rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;

  img {
    width: 7.5rem;
  }
`

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
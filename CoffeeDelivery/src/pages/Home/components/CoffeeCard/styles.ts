import styled from "styled-components"

export const CoffeeCountainer = styled.div`
  background: ${props => props.theme["base-card"]};

  width: 16rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 1.25rem;

  img {
    width: 7.5rem;
  }

  .CoffeeName {
    margin-top: 1rem;
    font-family: "Baloo 2";
    font-size: 1.25rem;
    font-weight: 700;
    text-align: center;
    color: ${props => props.theme["base-subtitle"]};
  }

  .CoffeeDescription {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    text-align: center;
    color: ${props => props.theme["base-label"]};
  }
`

export const CoffeeType = styled.div`
  color: ${props => props.theme["yellow-dark"]};

`

export const CoffeeButtonContainer = styled.button`
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

`

export const CoffeePlusMinus = styled.div`
  background: ${(props) => props.theme["base-button"]};

  display: flex;
  algin-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  padding: 0.5rem;
  border-radius: 8px;

  cursor: pointer;
`

export const CoffeeCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.75rem;

  background: ${props => props.theme["purple-dark"]};
  border-radius: 6px;
`
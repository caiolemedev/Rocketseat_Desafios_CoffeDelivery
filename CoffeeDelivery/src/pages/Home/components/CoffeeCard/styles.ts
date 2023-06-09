import styled from "styled-components"

export const CoffeeContainer = styled.div`
  background: ${props => props.theme["base-card"]};

  width: 16rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0 1.25rem 1.25rem 1.25rem;~

  border-radius: 20rem;

  img {
    margin-top: -1.25rem;
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

export const CoffeeTypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  .CoffeeType {
    background: ${props => props.theme["yellow-light"]};

    margin-top: 0.75rem;
    padding: 0.25rem 0.5rem;
    border-radius: 3rem;

    font-size: 0.625rem;
    font-weight: 800;
    color: ${props => props.theme["yellow-dark"]};
  }
`

export const CoffeeButtonContainer = styled.div`
  margin-top: 1.5rem;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  span{
    color: ${props => props.theme["base-text"]};
    font-size: 0.875rem;
  }

  .CoffeePrice {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-weigth: 800;
  }
`

export const CoffeePlusMinus = styled.div`
  background: ${(props) => props.theme["base-button"]};

  display: flex;
  algin-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  padding: 0.5rem;
  border-radius: 8px;

  button {
    display: flex;
    algin-items: center;
    justify-content: center;

    background: none;
    border: none;
    outline: none;
    box-shadow: 0px 0px 0px transparent;
    cursor: pointer;
  }
`

export const CoffeeCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.375rem 0.5rem;

  background: ${props => props.theme["purple-dark"]};

  border-radius: 6px;
  border: none;
  outline: none;
  box-shadow: 0px 0px 0px transparent;

  cursor: pointer;
`
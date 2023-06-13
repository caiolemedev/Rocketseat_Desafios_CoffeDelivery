import styled from "styled-components"

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`
export const HomeIntro = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  `

export const HomeTitle = styled.div`

  h1 {
    font-family:  'Baloo 2', cursive;
    font-size: 3rem;
    line-height: 3.875rem;
    color: ${(props) => props.theme["base-title"]};
  }

  p {
    margin-top: 1rem;
    font-size: 1.275rem;
    color: ${(props) => props.theme["base-subtitle"]}
  }
`
export const HomeItems = styled.div`
  margin-top: 4.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.5rem;

  p {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  svg {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    background: purple;
    border-radius: 50%;
  }

`

export const ImageContainer = styled.div`
  max-width: 22.5rem;
`
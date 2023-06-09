import styled from "styled-components"

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`
export const HomeIntro = styled.div`
  margin-top: 5.75rem;
  display: flex;
`

export const HomeTitle = styled.div`

  h1 {
    background: ${(props) => props.theme.purple};
    font-family:  'Baloo 2', cursive;
    font-size: 3rem;

    color: ${(props) => props.theme["base-title"]}
  }

  p {
    color: ${(props) => props.theme["base-subtitle"]}
  }
`
export const HomeItems = styled.div`
  background: black;
`

export const ImageContainer = styled.div`
  max-width: 50%;
`
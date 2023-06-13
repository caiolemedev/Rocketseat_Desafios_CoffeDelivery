import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0rem;
`

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const HeaderLocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem 0.75rem;

  background: ${props => props.theme["purple-light"]};
  border-radius: 6px;

  font-size: 0.875rem;
  color: ${props => props.theme["purple-dark"]};
`

export const HeaderCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.75rem;

  background: ${props => props.theme["yellow-light"]};
  border-radius: 6px;
`
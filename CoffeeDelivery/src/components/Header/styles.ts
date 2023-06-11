import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  padding: 0.5rem;

  background: ${props => props.theme["purple-light"]};
  border-radius: 6px;

  font-size: 0.875rem;
`
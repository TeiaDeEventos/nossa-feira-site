import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: 100vh;
  padding-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-variation-settings: 'wght' 700, 'opsz' 72, 'SOFT' 100;
  color: ${({ theme }) => theme.colors.verde};
  font-size: 32px;
`

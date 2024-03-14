import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-shadow: 0px 4px 16px #7b879416;
`

export const HeaderElementsContainer = styled.div`
  width: 85%;
  padding-top: 8px;
  padding-bottom: 8px;
  @media screen and (min-width: 768px) {
    max-width: 1000px;
  }
`

export const Logo = styled.img`
  height: 45px;
`

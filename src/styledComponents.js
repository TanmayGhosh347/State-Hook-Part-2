import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
 body {
  margin: 0px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

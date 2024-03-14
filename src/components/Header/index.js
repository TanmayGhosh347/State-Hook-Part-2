import {
  HeaderContainer,
  HeaderElementsContainer,
  Logo,
} from './styledComponents'

const Header = () => (
  <HeaderContainer>
    <HeaderElementsContainer>
      <Logo
        src="https://assets.ccbp.in/frontend/hooks/nxt-player-logo-img.png"
        alt="nxt player logo"
      />
    </HeaderElementsContainer>
  </HeaderContainer>
)

export default Header

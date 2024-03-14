import Header from './components/Header'
import VideoPlayer from './components/VideoPlayer'
import Comments from './components/Comments'

import {GlobalStyle, MainContainer} from './styledComponents'

const App = () => (
  <>
    <GlobalStyle />
    <MainContainer>
      <Header />
      <VideoPlayer />
      <Comments />
    </MainContainer>
  </>
)

export default App

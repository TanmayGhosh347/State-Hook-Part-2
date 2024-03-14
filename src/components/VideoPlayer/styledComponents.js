import styled from 'styled-components'

export const VideoPlayerContainer = styled.div`
  width: 85%;
  margin-top: 50px;
  @media screen and (min-width: 768px) {
    max-width: 1000px;
  }
`

export const VideoTitle = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
`

export const VideoStats = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 16px;
`

export const HorizontalLine = styled.hr`
  width: 100%;
  border: 1px solid #cbd5e140;
  margin-top: 30px;
  margin-bottom: 30px;
`

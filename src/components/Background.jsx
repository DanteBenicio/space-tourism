import styled from 'styled-components'

const BackgroundImage = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  padding-bottom: 2rem;
  
  background-image: url('/assets/${({ page }) => page}/background-${({ page }) => page}-desktop.jpg');
  background-clip: padding-box;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 750px) {
    background-image: url('/assets/${({ page }) => page}/background-${({ page }) => page}-tablet.jpg');
      
    @media screen and (max-width: 637px) {
      background-image: url('/assets/${({ page }) => page}/background-${({ page }) => page}-tablet.jpg');
    }
  }
`

export const Background = ({ children, page }) => {
  return (
    <BackgroundImage page={page.toLowerCase()}>
      {children}
    </BackgroundImage>
  )
}
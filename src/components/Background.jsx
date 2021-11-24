import styled from 'styled-components'

const BackgroundImage = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  padding-bottom: 2rem;
  
  background-image: url('/assets/${({ page }) => page}/background-${({ page }) => page}-desktop.jpg');
  background-clip: padding-box;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 750px) {
    height: 140vh;
    background-image: url('/assets/${({ page }) => page}/background-${({ page }) => page}-tablet.jpg');
      
    @media screen and (max-width: 637px) {
      height: 140vh;    
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
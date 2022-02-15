import styled from 'styled-components'

const Heading = styled.h1`
  font-family: Bellefair;
  font-weight: 400;
  font-size: ${({ fontSize }) => fontSize ? fontSize : '100px'};

  @media screen and (max-width: 680px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 500px) {
    text-align: center;
  }
`

export const Title = ({ titleName, fontSize }) => (
  <Heading fontSize={fontSize}>{titleName}</Heading>
)
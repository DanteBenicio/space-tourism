import styled from 'styled-components'

const Heading = styled.h1`
  font-family: Bellefair;
  font-weight: 400;
  font-size: ${({ fontSize }) => fontSize ? fontSize : '100px'};
`

export const Title = ({ titleName, fontSize }) => (
  <Heading fontSize={fontSize}>{titleName}</Heading>
)
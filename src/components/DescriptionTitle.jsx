import styled from 'styled-components'
import colors from '../../colors'

const Heading = styled.h2`
  margin-left: 7rem;
  font-size: 28px;
  color: ${props => props.whitePrimary};
  font-family: 'Barlow Condensed';
  letter-spacing: 4.72px;

  span {
    display: inline-block;
    margin-right: 1.75rem;
    font-family: 'Barlow Condensed';
    font-weight: bold;
    color: #FFFFFF;

    mix-blend-mode: normal;
    opacity: 0.25;
  }
`

export const DescriptionTitle = ({ number, title }) => {
  return (
    <Heading whitePrimary={colors.whitePrimary}>
      <span>{number}</span>{title.toUpperCase()}
    </Heading>
  )
}
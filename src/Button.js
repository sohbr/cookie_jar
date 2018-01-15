import colorMap from './themes/_colors'
import styled from 'styled-components'

export default styled.button`
  background-color: ${props =>
    props.color ? props.color : colorMap.get('brown')};
  color: ${colorMap.get('offwhite')};
  margin-top: 1rem;
  border-radius: 0.3rem;
  border: .1rem solid transparent;
  font-size: 1rem;
  width: ${props => (props.width ? props.width : 'auto')};
  height: ${props => (props.height ? props.height : 'auto')};
  padding: 0.6rem 1.25rem;
  transition: 0.2s all;
  cursor: pointer;

  &:hover {
    background-color: ${colorMap.get('offwhite')};
    color: ${props => (props.color ? props.color : colorMap.get('brown'))};
    border-color: ${props =>
      props.color ? props.color : colorMap.get('brown')};

    font-weight: bold;
  }
`

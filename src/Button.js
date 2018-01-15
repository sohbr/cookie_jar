import styled from 'styled-components'

export default styled.button`
  background-color: $c-brown;
  color: $c-offwhite;
  margin-top: 15px;
  border-radius: 5px;
  font-size: 1.2vw;
  width: 14vw;
  height: 3vw;

  &:hover {
    background-color: $c-offwhite;
    color: $c-brown;
    border-color: $c-brown;
    border-width: 2px;
    font-weight: bold;
    cursor: pointer;
  }
`

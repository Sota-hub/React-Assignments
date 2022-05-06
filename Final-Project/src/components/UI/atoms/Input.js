import React, {useState} from "react"
import styled from "styled-components"

const Container = styled.div`
  margin: 40px 0 40px 0;
  position: relative;
`

const Text = styled.p`
  font-size: 16px;
  color: silver;
  position: absolute;
  ${props => (props.isFocused) && "top: -14px; color: red; font-size: 12px;"}
`

const Inputs = styled.input`
  font-size: 16px;
  border: none;
  border-bottom: 1px solid silver;
  width: 100%;
  &:focus {
    outline: none;
    border-bottom: 1px solid red;
  }
`

const Input = ({label, value, handleClick}) => {
  const [isFocused, setIsFocused] = useState(value ? true : false);
  
  return (
    <Container>
      <Text isFocused={isFocused}>
        {label}
      </Text>
      <Inputs value={value} onFocus={() => setIsFocused(true)} onChange={handleClick} />
    </Container>
  )
}

export default Input
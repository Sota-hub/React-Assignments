import React, {useState} from "react";
import styled from "styled-components"
import { useSelector } from "react-redux";

const Container = styled.div`
  padding: 26px 24px;
  position: relative;
`

const Text = styled.p`
  font-size: 14px;
  color: silver;
  position: absolute;
  ${props => props.isFocused && "top: 8px; color: red; font-size: 10px;"}
`

const Input = styled.input`
  border: none;
  border-bottom: 1px solid silver;
  width: 100%;
  &:focus {
    outline: none;
    border-bottom: 1px solid red;
  }
`

const FilterBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      <Text isFocused={isFocused}>
        Filter Issues
      </Text>
      <Input onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
    </Container>
  );
};

export default FilterBar
import React from "react"
import styled from "styled-components"

const Buttons = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0
`

const Button = styled.p`
  padding: 16px;
`

const handleDispatch = (dispatch, onClick) => {
  dispatch();
  onClick();
}

const CrudButtons = ({ instruction, onClick, dispatch }) => {
  return (
    <Buttons>
      <Button onClick={() => handleDispatch(dispatch, onClick)}>{instruction}</Button>
      <Button onClick={onClick && onClick}>cancel</Button>
    </Buttons>
  )
}

export default CrudButtons
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`

const PlusButton = ({onClick}) => {
  return (
    <Container onClick={onClick && onClick}>
      <img src="/public/plus.svg" width={24} height={24} />
    </Container>
  )
}

export default PlusButton;
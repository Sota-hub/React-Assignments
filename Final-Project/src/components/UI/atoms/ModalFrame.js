import React from "react"
import styled from "styled-components"

const Overlay = styled.div`
  position: fixed;
  z-index: 5;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,.32);
`

const ModalFrame = ({children, onClick}) => {
  return (
    <>
      {children}
      <Overlay onClick={onClick} />
    </>
  )
}

export default ModalFrame
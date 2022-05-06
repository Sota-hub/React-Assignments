import React from  "react"
import styled from "styled-components"
import { useSelector } from "react-redux"
import ModalFrame from "../atoms/ModalFrame"

import InputCard from "./InputCard"


const Modal = styled.div`
  padding: 24px;
  padding-bottom: 4px;
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  border-radius: 4px;
  width: 500px;
  background-color: #fff;
  overflow: auto;
  @media(max-width: 769px) {
    width: 60%;
  }
` 

const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
`

const EditModal = ({ id, onClick }) => {
  const issue = useSelector((state) => state.crud).find(data => data.id === id);
  return (
    <ModalFrame onClick={onClick} >
      <Modal>
        <Title>Issue Id: {issue?.id}</Title>
        <InputCard id={id} onClick={onClick} />
      </Modal>
    </ModalFrame>
  )
}

export default EditModal
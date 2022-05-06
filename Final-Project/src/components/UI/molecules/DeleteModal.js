import React from  "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { remove } from "../../../slices/CrudSlice"
import ModalFrame from "../atoms/ModalFrame"
import CrudButtons from "../atoms/CrudButtons"


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

const Text = styled.p`
  & + & {
    margin-top: 16px;
  }
`

const DeleteModal = ({ id, onClick }) => {
  const issue = useSelector((state) => state.crud).find(data => data.id === id);
  const dispatch = useDispatch();
  return (
    <ModalFrame onClick={onClick} >
      <Modal>
        <Title>Are you sure ?</Title>
        <div>
          <Text>Id: {issue?.id}</Text>
          <Text>Title: {issue?.title}</Text>
          <Text>State: {issue?.status}</Text>
          <Text>Url: {issue?.url}</Text>
        </div>
        <CrudButtons instruction="delete" onClick={onClick} dispatch={() => dispatch(remove(id))}/>
      </Modal>
    </ModalFrame>
  )
}

export default DeleteModal
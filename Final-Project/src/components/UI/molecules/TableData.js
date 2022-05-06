import React, {useState} from "react"
import styled from "styled-components"
import { useSelector } from "react-redux"
import EditButton from "../atoms/EditButton"
import DeleteButton from "../atoms/DeleteButton"
import EditModal from "./EditModal"
import DeleteModal from "../molecules/DeleteModal"

const TableRow = styled.tr`
  border-bottom: 1px solid silver;
`

const TableDatum = styled.td`
  text-align: start;
  font-size: 14px;
  height: 48px;
  line-height: 48px;
  &:nth-child(1) {
    width: 6%;
    padding-left: 24px;
  }
  &:nth-child(2) {
    width: 30%;
  }
  &:nth-child(3) {
    width: 6%;
  }
  &:nth-child(4) {
    width: 15%;
  }
  &:nth-child(5) {
    width: 15%;
  }
  &:nth-child(6) {
    width: 15%;
  }
  &:nth-child(7) {
    width: 10%;
    padding-right: 24px;
  }
`

const ButtonsContainer= styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const TableData = () => {
  const Data = useSelector((state) => state.crud);
  const [editModalId, setEditModalId] = useState(null);
  const [deleteModalId, setDeleteModalId] = useState(null);
  return (
    <>
      {Data?.map(data => (
        <TableRow>
          <TableDatum>{data.id}</TableDatum>
          <TableDatum>{data.title}</TableDatum>
          <TableDatum>{data.status}</TableDatum>
          <TableDatum>{data.url}</TableDatum>
          <TableDatum>{data.createdAt}</TableDatum>
          <TableDatum>{data.updatedAt}</TableDatum>
          <TableDatum>
            <ButtonsContainer>
              <EditButton onClick={() => setEditModalId(data.id)}/>
              <DeleteButton onClick={() => setDeleteModalId(data.id)} />
            </ButtonsContainer>
          </TableDatum>
        </TableRow>
      ))}
      {editModalId && <EditModal id={editModalId} onClick={() => setEditModalId(null)} />}
      {deleteModalId && <DeleteModal id={deleteModalId} onClick={() => setDeleteModalId(null)} />}
    </>
  )
}

export default TableData
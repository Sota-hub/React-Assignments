import React, {useState} from "react"
import styled from "styled-components"
import PlusButton from "../atoms/PlusButton"
import CreateModal from "./CreateModal"

const TableRow = styled.tr`
  border-bottom: 1px solid silver;
`

const TableHead = styled.th`
  text-align: start;
  font-size: 12px;
  height: 56px;
  line-height: 56px;
  color: silver;
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

const TableHeader = () => {
  const [isCreateModal, setIsCreateModal] = useState(false);
  return (
      <TableRow>
        <TableHead>Id</TableHead>
        <TableHead>Title</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Url</TableHead>
        <TableHead>Created at</TableHead>
        <TableHead>Updated at</TableHead>
        <TableHead>
          <PlusButton onClick={() => setIsCreateModal(true)} />
        </TableHead>
        {isCreateModal && <CreateModal onClick={() => setIsCreateModal(false)} />}
      </TableRow>
  )
}

export default TableHeader
import React from "react"
import styled from "styled-components"
import TableHeader from "../molecules/TableHeader"
import TableData from "../molecules/TableData"

const Container = styled.table`
  width: 100%;
`

const Table = () => {
  return (
    <Container>
      <TableHeader />
      <TableData />
    </Container>
  )
}

export default Table
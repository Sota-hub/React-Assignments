import React from "react"
import styled from "styled-components"
import Header from "../UI/organisms/Header"
import FilterBar from "../UI/atoms/FilterBar" 
import Table from "../UI/organisms/Table"

const TopPage = () => {
  return (
    <>
      <Header />
      <FilterBar />
      <Table />
    </>
  )
}

export default TopPage
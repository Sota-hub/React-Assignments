import React from "react"
import Logo from "../atoms/Logo"
import ReloadData from "../molecules/ReloadData"
import styled from "styled-components"

const Container = styled.div`
  font-size: 24px;
  font-weight: bold;
  background: #3f51b5;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 16px;
`

const Header = () => {
  return (
    <Container>
      <Logo />
      <ReloadData />
    </Container>
  )
}

export default Header
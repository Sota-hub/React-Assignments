import React from "react";
import ReloadButton from "../atoms/ReloadButton";
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
`

const ReloadData = () => {
  return (
    <Container>
      <p>Reload data:</p>
      <ReloadButton />
    </Container>
  );
};

export default ReloadData
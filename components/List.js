import React from "react";
import styled from "styled-components";
import Title from "./Title";

const Container = styled.View`
  margin-top: 20px;
`;

const List = ({ title, children }) => (
  <>
    <Title title={title}></Title>
    <Container>{children}</Container>
  </>
);

export default List;

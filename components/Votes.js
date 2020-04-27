import React from "react";
import styled from "styled-components/native";

const Container = styled.Text`
  color: lightgray;
  font-size: 12px;
`;

const Votes = ({ votes }) => <Container>⭐️ {votes} / 10</Container>;

export default Votes;

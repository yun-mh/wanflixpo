import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import Votes from "./Votes";
import { trimText } from "../utils";

const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 500;
  margin-top: 8px;
  margin-bottom: 5px;
`;

const NoRates = styled.Text`
  color: lightgray;
`;

const Vertical = ({ id, poster, title, votes }) => (
  <TouchableOpacity>
    <Container>
      <Poster url={poster} />
      <Title>{trimText(title, 10)}</Title>
      {votes > 0 ? <Votes votes={votes} /> : <NoRates>No rates yet</NoRates>}
    </Container>
  </TouchableOpacity>
);

Vertical.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Vertical;

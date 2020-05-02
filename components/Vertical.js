import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";
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

const Vertical = ({ isTv = false, id, poster, title, votes }) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail", { isTv, id, title, poster, votes });
  };
  return (
    <TouchableOpacity onPress={goToDetail}>
      <Container>
        <Poster url={poster} />
        <Title>{trimText(title, 10)}</Title>
        {votes > 0 ? <Votes votes={votes} /> : <NoRates>No rates yet</NoRates>}
      </Container>
    </TouchableOpacity>
  );
};

Vertical.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Vertical;

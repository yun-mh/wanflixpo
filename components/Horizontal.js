import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";
import Poster from "./Poster";
import { trimText, formatDate } from "../utils";

const Container = styled.View`
  padding: 0 30px;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: flex-start;
`;

const Data = styled.View`
  align-items: flex-start;
  width: 60%;
  margin-left: 25px;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ReleasedDate = styled.Text`
  color: white;
  font-size: 12px;
`;

const Overview = styled.Text`
  margin-top: 10px;
  color: white;
`;

const Horizontal = ({
  isTv = false,
  id,
  title,
  poster,
  overview,
  releasedDate,
}) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail", {
      isTv,
      id,
      title,
      poster,
      overview,
      releasedDate,
    });
  };
  return (
    <TouchableOpacity onPress={goToDetail}>
      <Container>
        <Poster url={poster} />
        <Data>
          <Title>{trimText(title, 30)}</Title>
          {releasedDate ? (
            <ReleasedDate>{formatDate(releasedDate)}</ReleasedDate>
          ) : null}
          <Overview>{trimText(overview, 130)}</Overview>
        </Data>
      </Container>
    </TouchableOpacity>
  );
};

Horizontal.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  releasedDate: PropTypes.string,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string,
};

export default Horizontal;

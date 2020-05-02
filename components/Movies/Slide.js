import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { apiImage } from "../../api";
import Poster from "../Poster";
import Votes from "../Votes";
import { trimText } from "../../utils";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  height: 100%;
  width: 100%;
`;

const Background = styled.Image`
  height: 100%;
  width: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Content = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: white;
  font-weight: 500;
  font-size: 19px;
  margin-bottom: 7px;
`;

const VotesContainer = styled.View`
  margin-bottom: 7px;
`;

const Overview = styled.Text`
  color: lightgray;
  font-size: 14px;
  font-weight: 500;
`;

const Button = styled.View`
  margin-top: 10px;
  background-color: #e74c3c;
  padding: 7px 10px;
`;

const ButtonText = styled.Text`
  color: white;
`;

const Slide = ({
  isTv = false,
  id,
  title,
  backgroundImage,
  votes,
  overview,
  poster,
}) => {
  const navigation = useNavigation();
  const goToDetail = () =>
    navigation.navigate("Detail", {
      isTv,
      id,
      title,
      backgroundImage,
      votes,
      overview,
      poster,
    });
  return (
    <Container>
      <Background source={{ uri: apiImage(backgroundImage) }} />
      <Content>
        <Poster url={poster} />
        <Data>
          <Title>{trimText(title, 20)}</Title>
          <VotesContainer>
            <Votes votes={votes} />
          </VotesContainer>
          <Overview>{trimText(overview, 110)}</Overview>
          <TouchableOpacity onPress={goToDetail}>
            <Button>
              <ButtonText>View Details</ButtonText>
            </Button>
          </TouchableOpacity>
        </Data>
      </Content>
    </Container>
  );
};

Slide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Slide;

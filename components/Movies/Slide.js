import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { apiImage } from "../../api";
import Poster from "../Poster";
import { TouchableOpacity } from "react-native-gesture-handler";

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
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 7px;
`;

const Votes = styled.Text`
  color: lightgray;
  margin-bottom: 7px;
  font-size: 12px;
`;

const Overview = styled.Text`
  color: lightgray;
  font-size: 14px;
  font-weight: 500;
`;

const Button = styled.View`
  margin-top: 10px;
  background-color: #e74c3c;
  padding: 5px 10px;
`;

const ButtonText = styled.Text`
  color: white;
`;

const Slide = ({ id, title, backgroundImage, votes, overview, poster }) => (
  <Container>
    <Background source={{ uri: apiImage(backgroundImage) }} />
    <Content>
      <Poster url={apiImage(poster)} />
      <Data>
        <Title>{title.length < 20 ? title : `${title.slice(0, 20)}...`}</Title>
        <Votes>⭐️ {votes} / 10</Votes>
        <Overview>
          {overview.length < 110 ? overview : `${overview.slice(0, 110)}...`}
        </Overview>
        <TouchableOpacity>
          <Button>
            <ButtonText>View Details</ButtonText>
          </Button>
        </TouchableOpacity>
      </Data>
    </Content>
  </Container>
);

Slide.PropTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Slide;

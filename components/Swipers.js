import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import PropTypes from "prop-types";
import Swiper from "react-native-web-swiper";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SlideContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 40px;
`;

const Swipers = ({ children }) => (
  <SlideContainer>
    <Swiper controlsEnabled={false} loop timeout={3}>
      {children}
    </Swiper>
  </SlideContainer>
);

Swipers.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Swipers;

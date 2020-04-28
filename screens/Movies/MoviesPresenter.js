import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import Slide from "../../components/Movies/Slide";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import List from "../../components/List";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SlideContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 40px;
`;

const Container = styled.View``;

export default ({ loading, nowPlaying, popular, upcoming }) => (
  <ScrollContainer loading={loading}>
    <>
      <SlideContainer>
        <Swiper controlsEnabled={false} loop timeout={3}>
          {nowPlaying.map((movie) => (
            <Slide
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              overview={movie.overview}
              votes={movie.vote_average}
              backgroundImage={movie.backdrop_path}
              poster={movie.poster_path}
            />
          ))}
        </Swiper>
      </SlideContainer>
      <Container>
        <HorizontalSlider title={"Popular Movies"}>
          {popular.map((movie) => (
            <Vertical
              id={movie.id}
              key={movie.id}
              poster={movie.poster_path}
              title={movie.original_title}
              votes={movie.vote_average}
            />
          ))}
        </HorizontalSlider>
        <List title="Coming Soon">
          {upcoming.map((movie) => (
            <Horizontal
              id={movie.id}
              key={movie.id}
              poster={movie.poster_path}
              title={movie.original_title}
              releasedDate={movie.release_date}
              overview={movie.overview}
            />
          ))}
        </List>
      </Container>
    </>
  </ScrollContainer>
);

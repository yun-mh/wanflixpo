import React from "react";
import styled from "styled-components/native";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import Vertical from "../../components/Vertical";
import List from "../../components/List";
import Horizontal from "../../components/Horizontal";
import Swipers from "../../components/Swipers";
import Slide from "../../components/Movies/Slide";

const Container = styled.View`
  margin-top: 30px;
`;

export default ({ loading, popular, topRated, today, thisWeek, refreshFn }) => (
  <ScrollContainer refreshFn={refreshFn} loading={loading}>
    <Container>
      <HorizontalSlider title={"Top Rated"}>
        {topRated.map((show) => (
          <Vertical
            isTv={true}
            id={show.id}
            key={show.id}
            poster={show.poster_path}
            title={show.name}
            votes={show.vote_average}
          />
        ))}
      </HorizontalSlider>
      <Swipers>
        {thisWeek.map((show) => (
          <Slide
            isTv={true}
            key={show.id}
            id={show.id}
            title={show.name}
            overview={show.overview}
            votes={show.vote_average}
            backgroundImage={show.backdrop_path}
            poster={show.poster_path}
          />
        ))}
      </Swipers>
      <HorizontalSlider title={"Popular Shows"}>
        {popular.map((show) => (
          <Vertical
            isTv={true}
            id={show.id}
            key={show.id}
            poster={show.poster_path}
            title={show.name}
            votes={show.vote_average}
          />
        ))}
      </HorizontalSlider>
      <List title="Airing Today">
        {today.map((show) => (
          <Horizontal
            isTv={true}
            id={show.id}
            key={show.id}
            poster={show.poster_path}
            title={show.name}
            releasedDate={show.first_air_date}
            overview={show.overview}
          />
        ))}
      </List>
    </Container>
  </ScrollContainer>
);

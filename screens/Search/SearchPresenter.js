import React from "react";
import Input from "../../components/Search/Input";
import HorizontalSlider from "../../components/HorizontalSlider";
import Vertical from "../../components/Vertical";
import ScrollContainer from "../../components/ScrollContainer";

export default ({ movies, shows, keyword, onChange, onSubmit }) => (
  <ScrollContainer
    refreshFn={onSubmit}
    loading={false}
    contentContainerStyle={{ paddingTop: 10 }}
  >
    <Input
      placeholder={"Write a keyword"}
      value={keyword}
      onChange={onChange}
      onSubmit={onSubmit}
    />
    {movies.length !== 0 && (
      <HorizontalSlider title={"Movie Results"}>
        {movies.map((movie) => (
          <Vertical
            key={movie.id}
            id={movie.id}
            title={movie.original_title}
            poster={movie.poster_path}
            votes={movie.vote_average}
          />
        ))}
      </HorizontalSlider>
    )}
    {shows.length !== 0 && (
      <HorizontalSlider title={"TV Show Results"}>
        {shows.map((show) => (
          <Vertical
            key={show.id}
            id={show.id}
            title={show.name}
            poster={show.poster_path}
            votes={show.vote_average}
          />
        ))}
      </HorizontalSlider>
    )}
  </ScrollContainer>
);

import React, { useState, useEffect } from "react";
import FavsPresenter from "./FavsPresenter";
import { movieApi } from "../../api";

export default () => {
  const [movies, setMovies] = useState({
    results: [],
    loading: true,
    error: null,
  });
  const getData = async () => {
    const [results, error] = await movieApi.discover();
    setMovies({
      results,
      loading: false,
      error,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return <FavsPresenter {...movies} />;
};

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Text, Input, Select } from "@chakra-ui/react";

import Container from "../../components/Container";
import { fetchMovies, selectMovies } from "../../../core/movies/movieSlice";
import MoviesList from "../../components/MoviesList";

/* API Key expired after too many hits */
/* Genre filter has priority over title search */

const Movies = () => {
  const movies = useSelector(selectMovies);
  const [list, setList] = useState(movies?.data ?? []);
  const [genreList, setGenreList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    if (movies.data) {
      setList(movies.data);

      setGenreList(
        [
          ...new Set(
            movies?.data
              ?.map((i) => i.genres.split(",").map((i) => i.trim()))
              .flat()
          ),
        ].map((i) => {
          return {
            key: i,
            value: i,
          };
        }) as any
      );
    }
  }, [movies]); //memo

  const onGenreChanged = (e) => {
    if (e.target.value === "all") {
      setList(movies?.data);
      return;
    }
    setList(
      movies?.data?.filter((i) =>
        i.genres.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const onFilter = (e) => {
    // debounce
    const term = e.target.value;

    if (!term) {
      setList(movies.data ?? []);
      return;
    }

    if (term) {
      setList(
        list.filter((i) => i.title.toLowerCase().includes(term.toLowerCase()))
      );
    }
  };

  return (
    <Container>
      <Text fontSize="xl">Movies from IMDB API</Text>
      <Input
        placeholder="Search here..."
        name="filter-movies"
        onChange={onFilter}
      />
      <Select placeholder="Genre" onChange={onGenreChanged}>
        {genreList.map(({ key, value }) => (
          <option value={key}>{value}</option>
        ))}
      </Select>
      <MoviesList loading={movies?.status == "pending"} data={list} />
    </Container>
  );
};

export default Movies;

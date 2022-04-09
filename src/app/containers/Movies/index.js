import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchMovies, selectMovies } from "../../../core/movies/movieSlice";
import Dropdown from "../../components/Dropdown";
import List from "../../components/List";
import * as Styled from "./index.styles";

/* API Key expired after too many hits */
/* Genre filter has priority over title search */

const Movies = () => {
  const movies = useSelector(selectMovies);
  console.log(111, movies.status);
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
        })
      );
    }
  }, [movies]);

  const onGenreChanged = (item) => {
    if (item.key === "all") {
      setList(movies?.data);
      return;
    }
    setList(
      movies?.data?.filter((i) =>
        i.genres.toLowerCase().includes(item.value.toLowerCase())
      )
    );
  };

  const onFilter = (e) => {
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
    <Styled.Wrapper>
      <Styled.Title>Movies from IMDB API</Styled.Title>
      <Styled.Input
        name="filter-movies"
        placeholder="Search here"
        onChange={onFilter}
      />
      <Dropdown
        name="genre"
        list={genreList}
        onItemSelected={(item) => onGenreChanged(item)}
      />
      {/* Year is not available in the response */}
      {/* <Dropdown 
       name='year'
       list={
         movies?.data?.map(i => i.year)
       }
       onItemSelected={item => setYear(item)}
       / > */}
      <List loading={movies?.status == "pending"} data={list} />
    </Styled.Wrapper>
  );
};

export default Movies;

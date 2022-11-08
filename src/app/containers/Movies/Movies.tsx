import React, { useState, useMemo, useCallback } from "react";
import { Text, Input, HStack } from "@chakra-ui/react";
import debounce from "lodash.debounce";

import Container from "@components/Container";
import Select from "@components/Select";
import MoviesVirtualList from "@components/MoviesVirtualList";
import { MovieState } from "@redux/movies/types";
import { selectMovies } from "@redux/movies/movieSlice";
import { useAppSelector } from "@app/hooks";
import { extractGenreList, filterMovies } from "@containers/Movies/helpers";

/* API Key expires after 140 hits */

const Movies = () => {
  const { data, status }: MovieState = useAppSelector(
    selectMovies
  ) as MovieState;
  const [genre, setGenre] = useState();
  const [filter, setFilter] = useState();

  const moviesList = useMemo(() => {
    return filterMovies(data, genre, filter);
  }, [data, genre, filter]);

  const genreList = useMemo(() => extractGenreList(data), [data]);

  const onGenreChanged = (e: any) => {
    setGenre(e.target.value);
  };

  const onFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    debounceFilter(e.target.value as any);
  };

  const debounceFilter = useCallback(
    debounce((_searchVal: string) => {
      setFilter(_searchVal as any);
    }, 300),
    []
  );

  return (
    <Container>
      <Text fontSize="xl">Movies from IMDB API</Text>
      <HStack>
        <Input
          placeholder="Search here..."
          name="filter-movies"
          onChange={onFilter}
        />
        <Select
          placeholder="Genre"
          onChange={onGenreChanged}
          options={genreList}
        />
      </HStack>
      <MoviesVirtualList loading={status === "pending"} data={moviesList} />
    </Container>
  );
};

export default Movies;

import React from "react";
import {
  List,
  Spinner,
  Text,
} from "@chakra-ui/react";

import MovieListItem from './MovieListItem'

export default function MoviesList({ loading, data }) {
  if (loading) {
    return <Spinner />;
  }
  if (data && data.length == 0) {
    return <Text>Search yields no results!</Text>;
  }

  return (
    <List spacing={3}>
      {data.map((item) => (
        <MovieListItem {...item} /> 
      ))}
    </List>
  );
}

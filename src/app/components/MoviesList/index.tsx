import React from "react";
import { Grid, GridItem, List, Spinner, Text } from "@chakra-ui/react";

import MovieListItem from "./MovieListItem";

interface IProps {
  loading: boolean;
  data: any[];
}

export default function MoviesList({ loading, data }: IProps) {
  if (loading) {
    return <Spinner />;
  }
  if (data && data.length == 0) {
    return <Text>Search yields no results!</Text>;
  }
  return (
    <Grid
      templateColumns={{
        md: "repeat(1, 1fr)",
        xl: "repeat(5, 1fr)",
      }}
      gap={6}
    >
      {data.map((item) => (
        <GridItem w="100%" h="10" bg="blue.500">
          <MovieListItem {...item} />
        </GridItem>
      ))}
    </Grid>
  );
}

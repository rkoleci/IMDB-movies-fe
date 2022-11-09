import { useState, useEffect } from "react";
import { Text, Image, Flex, Grid, GridItem, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import Container from "@components/Container";
import { fetchMovies, selectMovies } from "@redux/movies/movieSlice";
import { Movie, MovieState } from "@redux/movies/types";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import InfoItem from "@containers/MovieDetails/InfoItem";

const MovieDetails = () => {
  const { id } = useParams();
  const movies: MovieState = useAppSelector(selectMovies) as MovieState;
  const [data, setData] = useState<Movie>();
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (movies?.status === 'idle' || movies?.status === 'pending') {
      dispatch(fetchMovies());
    }
    if (id) {
      setData(movies?.data?.find((item: Movie) => item.id === id));
    }
  }, [id, movies?.data]);

  return (
    <Container>
      <Text>Movie Details</Text>
      {movies?.status === 'pending' && <Spinner />}
      {data && (
        <Grid
          templateColumns={{
            md: "repeat(1, 1fr)",
            xl: "repeat(6, 1fr)",
          }}
          gap={6}
        >
          <GridItem w="100%" colSpan={2}>
            <Image
              objectFit={"cover"}
              width={"100%"}
              maxH={{
                md: "300px",
                xl: "100%",
              }}
              src={data?.image}
              alt={data?.title}
            />
          </GridItem>
          <GridItem w="100%" colSpan={4}>
            <Flex flexDir="column" gridGap={6}>
              <InfoItem label={"Title"} value={data?.title} />
              <InfoItem label={"Time"} value={data?.runtimeStr} />
              <InfoItem label={"Description"} value={data?.description} />
              <InfoItem label={"Genres"} value={data?.genreList} />
              <InfoItem label={"Stars"} value={data?.starList} />
            </Flex>
          </GridItem>
        </Grid>
      )}
      {(movies?.status !== 'pending' && !data) && <Text>Movie not found!</Text>}
    </Container>
  );
};

export default MovieDetails;

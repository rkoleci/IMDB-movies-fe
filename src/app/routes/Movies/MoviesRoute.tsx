import { useEffect } from "react";

import Movies from "@containers/Movies";
import { fetchMovies, selectMovies } from "@redux/movies/movieSlice";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { MovieState } from "@redux/movies/types";

export default function MoviesRoute() {
  const movies: MovieState = useAppSelector(selectMovies) as MovieState;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (movies?.status === 'idle' || movies?.status === 'pending') {
      dispatch(fetchMovies());
    }
  }, [dispatch]);

  return <Movies />;
}

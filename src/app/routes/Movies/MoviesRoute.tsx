import { useEffect } from "react";

import Movies from "@containers/Movies";
import { fetchMovies } from "@redux/movies/movieSlice";
import { useAppDispatch } from "@app/hooks";

export default function MoviesRoute() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return <Movies />;
}

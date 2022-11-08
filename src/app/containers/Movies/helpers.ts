import { Movie } from "@redux/movies/types";

export const extractGenreList = (moviesList: Array<Movie>) => {
  const genreList = moviesList
    ?.map((i) => i.genres.split(",").map((i) => i.trim()))
    .flat();

  return [...Array.from(new Set(genreList))].map((i) => {
    return {
      key: i,
      value: i,
    };
  });
};

export const filterMovies = (moviesList: Array<Movie>, genre?:string, filter?: string) => {
  if (!genre && !filter) return moviesList;

  let results: Array<Movie> = moviesList;

  if (genre) {
    results = moviesList.filter((movie: Movie) => {
      return movie.genreList.map((genre: any) => genre.value).includes(genre);
    });
  }

  if (filter) {
    results = results.filter((movie: Movie) =>
      movie.title.toLowerCase().includes(filter.toLowerCase())
    );
  }

  return results;
}
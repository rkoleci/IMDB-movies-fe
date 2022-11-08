export type Movie = {
  contentRating: string;
  description: string;
  genreList: Array<{
    key: string;
    value: string;
  }>;
  genres: string;
  id: string;
  imDbRating: string;
  imDbRatingVotes: string;
  image: string;
  metacriticRating: string;
  plot: string;
  runtimeStr: string;
  starList: Array<{
    id: string;
    name: string;
  }>;
  stars: string;
  title: string;
};

export type MovieState = {
  data: Array<Movie>;
  status: "idle" | "pending" | "fulfilled" | "error";
  error: any;
};

import axios from "axios";

export const fetchMovies = (endpoint, pageParam = 1) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${endpoint}?api_key=205f4bdf2770aca75748e606de538da0&page=${pageParam}`
    )
    .then((res) => res.data);
};
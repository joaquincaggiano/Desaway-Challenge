import {useEffect, useState} from 'react';
import {Movie, MoviesResponse} from '../interfaces/movieInterfaces';
import moviesDB from '../api/moviesDB';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1)
  const [moviesInCine, setMoviesInCine] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const resp = await moviesDB.get<MoviesResponse>(`/now_playing?page=${page}`);
    setPage(page => page + 1)
    setMoviesInCine([...moviesInCine, ...resp.data.results]);
    setIsLoading(false);
  };

  return {
    moviesInCine,
    isLoading,
    getMovies
  };
};
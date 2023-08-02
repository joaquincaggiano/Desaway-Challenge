import {useEffect, useState} from 'react';
import moviesDB from '../api/moviesDB';
import {Movie, MoviesResponse} from '../interfaces/movieInterfaces';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesInCine, setMoviesInCine] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const resp = await moviesDB.get<MoviesResponse>('/now_playing');
    setMoviesInCine(resp.data.results);
    setIsLoading(false);
  };

  return {
    moviesInCine,
    isLoading,
  };
};

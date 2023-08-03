import {useEffect, useState} from 'react';
import {Movie, MoviesResponse} from '../interfaces/movieInterfaces';
import axios from 'axios';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1)
  const [moviesInCine, setMoviesInCine] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const resp = await axios.get<MoviesResponse>(`https://api.themoviedb.org/3/movie/now_playing?page=${page}&api_key=29ae7ede5815710001d04a89c2736fa2&language=es-ES`);
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

// const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

//   useEffect(() => {
//     loadPokemons();
//   }, []);

//   const loadPokemons = async () => {
//     setIsLoading(true);
//     const resp = await pokemonApi.get<PokemonPaginatedResponse>(nextPageUrl.current);
//     nextPageUrl.current = resp.data.next;
//     mapPokemonList(resp.data.results);
//   };

//   const mapPokemonList = (pokemonList: Result[]) => {
//     const newPokemonList: SimplePokemon[] = pokemonList.map(({name, url}) => {
//       const urlParts = url.split('/');
//       const id = urlParts[urlParts.length - 2];
//       const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
//       return {
//         id,
//         picture,
//         name,
//       };
//     });

//     setSimplePokemonList([...simplePokemonList, ...newPokemonList]);
//     setIsLoading(false);
//   };

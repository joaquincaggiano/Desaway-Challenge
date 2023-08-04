import {useEffect, useState} from 'react';
import seriesDB from '../api/seriesDB';
import {Serie, SeriesResponse} from '../interfaces/serieInterfaces';

export const useSeries = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1)
  const [seriesInTv, setSeriesInTv] = useState<Serie[]>([]);

  useEffect(() => {
    getSeries();
  }, []);

  const getSeries = async () => {
    const resp = await seriesDB.get<SeriesResponse>(`/airing_today?page=${page}`);
    setPage(page => page + 1)
    setSeriesInTv([...seriesInTv, ...resp.data.results]);
    setIsLoading(false);
  };

  return {
    isLoading,
    seriesInTv,
    getSeries
  };
};

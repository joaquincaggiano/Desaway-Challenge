import {useEffect, useState} from 'react';
import seriesDB from '../api/seriesDB';
import {Serie, SeriesResponse} from '../interfaces/serieInterfaces';

export const useSeries = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [seriesInTv, setSeriesInTv] = useState<Serie[]>([]);

  useEffect(() => {
    getSeries();
  }, []);

  const getSeries = async () => {
    const resp = await seriesDB.get<SeriesResponse>('/airing_today');
    setSeriesInTv(resp.data.results);
    setIsLoading(false);
  };

  return {
    isLoading,
    seriesInTv,
  };
};

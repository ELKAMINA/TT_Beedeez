/* eslint-disable no-alert */
/* eslint-disable no-catch-shadow */
import {useState, useEffect} from 'react';
import {Station} from '../components/list-stations/interface/station.interface';
import axios, {AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';
type QueryParams = Record<string, any>;

interface UseFetchReturnType {
  data: Station[]; // The data is always an array of Station
  isLoading: boolean;
  error: AxiosError | null;
  refetch: () => void;
}

const useFetch = (endpoint: string, query: QueryParams): UseFetchReturnType => {
  const [data, setData] = useState<Station[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const options: AxiosRequestConfig = {
    method: 'GET',
    url: `http://localhost:3000/${endpoint}`,
    params: {...query},
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (err: any) {
      console.log('data', data);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Added dependencies to useEffect

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return {data, isLoading, error, refetch};
};

export default useFetch;

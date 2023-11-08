import {useState, useEffect} from 'react';
import axios, {AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';

type QueryParams = Record<string, any>;

interface UseFetchReturnType<T> {
  data: T[];
  isLoading: boolean;
  error: AxiosError | null;
  refetch: () => void;
}

// Define the hook with generics
const useFetch = <T,>(
  endpoint: string,
  query: QueryParams,
): UseFetchReturnType<T> => {
  const [data, setData] = useState<T>({} as T); // Initialize data with a generic type
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
      const response: AxiosResponse<T> = await axios.request<T>(options);
      setData(response.data);
      setIsLoading(false);
    } catch (error: any) {
      setError(error);
      alert('There is an error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return {data, isLoading, error, refetch};
};

export default useFetch;

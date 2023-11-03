import { useQuery } from 'react-query';
import {getMovie} from "../api/tmbd-data";


const QUERY_KEY = ['User'];

const fetchUser = async (params) => {
  const { data } = await getMovie();
  return data;
};

export const useGetUser = (params) => {
  return useQuery(QUERY_KEY, () => fetchUser(params));
};

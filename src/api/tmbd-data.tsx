import axios, {AxiosResponse} from "axios";
import { formatResult } from "../utils";
import { Cast, Film } from "../interfaces";
import {MediaType} from "../types";

const API_KEY = process.env.REACT_APP_API_KEY;

const axiosClient = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

axiosClient.interceptors.request.use((config) => {
  return {
    ...config,

    params: {
      ...config.params,
      api_key: `${API_KEY}`,
    },
  };
});

export const getTopRated = async () => {
  try {
    const { data } = await axiosClient.get<any, AxiosResponse<{results: unknown[]}>>(`/movie/top_rated`);

    return {
      films: data.results.map((val) => formatResult(val)),
    };
  } catch (error) {
    console.error(error);
  }

  return {
    films: [],
  };
};

export const getPopulars = async (mediaType: MediaType) => {
  try {
    const { data } = await axiosClient.get<
      any,
      AxiosResponse<{ results: unknown[] }>
    >(`/${mediaType}/popular?language=en-US&page=1`);

    return data.results.map((val) => formatResult(val, mediaType));
  } catch (error) {
    console.error(error);
  }

  return [];
};

export const getPopularsFilmsPage = async (page: string) => {
  try {
    const { data } = await axiosClient.get(
      `/movie/popular?language=en-US&page=${page}`,
    );

    return data;
  } catch (error) {
    console.error(error);
  }

  return [];
};

export const getMovie = async (id: number): Promise<null | Film> => {
  try {
    const { data } = await axiosClient.get(`/movie/${id}`);

    return formatResult(data);
  } catch (error) {
    console.error(error);
  }

  return null;
};

export const getCast = async (id: number): Promise<Cast[]> => {
  try {
    const { data } = await axiosClient.get<any, AxiosResponse<{cast: any[]}>>(`/movie/${id}/credits`);

    return (
        data.cast.map((cast) => ({
          id: cast.id,
          characterName: cast.character,
          name: cast.name,
          profilePath: cast.profile_path,
        })) ?? []
    )
  } catch (error) {
    console.error(error);
  }

  return [];
};

export const getSimilar = async (id: number) => {
  try {
    const { data } = await axiosClient.get(
      `/movie/${id}/similar?language=en-US&page=1`,
    );

    return data;
  } catch (error) {
    console.error(error);
  }

  return [];
};

export const getReviews = async (id: number) => {
  try {
    const { data } = await axiosClient.get(
      `/movie/${id}/reviews?language=en-US&page=1`,
    );

    return data;
  } catch (error) {
    console.error(error);
  }

  return [];
};

// export const getTrailers = async (mediaType: MediaType, id: number) => {
//   try {
//     const { data } = await axiosClient.get(`/${mediaType}/${id}/videos`);
//
//     return (
//       data.results
//         .filter((res) => res.site.toLowerCase() === "youtube")
//         .map((res) => ({
//           id: res.id,
//           key: res.key,
//         })) ?? []
//     );
//   } catch (error) {
//     console.error(error);
//   }
//
//   return [];
// };

export const getPerson = async (id: number) => {
  try {
    const { data } = await axiosClient.get(
      `/person/${id}?language=en-US&append_to_response=movie_credits`,
    );

    return data;
  } catch (error) {
    console.error(error);
  }

  return [];
};

// export const search = async (query, page = 1) => {
//   try {
//     const { data } = await axiosClient.get(`/search/multi`, {
//       params: {
//         query,
//         page,
//       },
//     });
//     return {
//       totalPages: data.total_pages,
//       totalResults: data.total_results,
//       films: data.results.map((val) => formatResult(val)),
//     };
//   } catch (error) {
//     console.error(error);
//   }
//
//   return {
//     totalPages: 0,
//     totalResults: 0,
//     films: [],
//   };
// };

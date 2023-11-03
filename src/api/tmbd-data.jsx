import axios from "axios";
import { formatResult } from "../utils";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_REA_TOKEN = process.env.REACT_APP_API_REA_TOKEN;

const axiosClient = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

axiosClient.interceptors.request.use((config) => {
  return {
    ...config,
    headers: {
      Authorization: `Bearer ${API_REA_TOKEN}`,
    },
    params: {
      ...config.params,
      api_key: `${API_KEY}`,
    },
  };
});

export const getTopRated = async () => {
  try {
    const { data } = await axiosClient.get(`/movie/top_rated`);

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

export const getPopulars = async (mediaType) => {
  try {
    const { data } = await axiosClient.get(
      `/${mediaType}/popular?language=en-US&page=1`,
    );

    return data.results.map((val) => formatResult(val, mediaType));
  } catch (error) {
    console.error(error);
  }

  return [];
};

export const getPopularsFilmsPage = async (page) => {
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

export const getMovie = async (id) => {
  try {
    const { data } = await axiosClient.get(`/movie/${id}`);

    return formatResult(data);
  } catch (error) {
    console.error(error);
  }

  return [];
};

export const getCast = async (id) => {
  try {
    const { data } = await axiosClient.get(`/movie/${id}/credits`);

    return data;
  } catch (error) {
    console.error(error);
  }

  return [];
};

export const getSimilar = async (id) => {
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

export const getReviews = async (id) => {
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

export const getTrailers = async (mediaType, id) => {
  try {
    const { data } = await axiosClient.get(`/${mediaType}/${id}/videos`);

    return (
      data.results
        .filter((res) => res.site.toLowerCase() === "youtube")
        .map((res) => ({
          id: res.id,
          key: res.key,
        })) ?? []
    );
  } catch (error) {
    console.error(error);
  }

  return [];
};

export const getPerson = async (id) => {
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

export const search = async (query, page = 1) => {
  try {
    const { data } = await axiosClient.get(`/search/multi`, {
      params: {
        query,
        page,
      },
    });
    return {
      totalPages: data.total_pages,
      totalResults: data.total_results,
      films: data.results.map((val) => formatResult(val)),
    };
  } catch (error) {
    console.error(error);
  }

  return {
    totalPages: 0,
    totalResults: 0,
    films: [],
  };
};

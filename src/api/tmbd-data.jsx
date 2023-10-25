import axios from "axios";
import { formatResult } from "../utils";

const API_KEY = process.env.API_KEY;

const axiosClient = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

axiosClient.interceptors.request.use((config) => {
  return {
    ...config,
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWEzYWZjNmMyYmU0ODU5MGI4NmM3NmU4MTkxZWY5OCIsInN1YiI6IjY1MDljNzYxZmEyN2Y0MDBjYWE1YjFkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.llgJVC0hoek7A2a-DVdzKrf0oegtmsRirrzOBhN7UFo`,
    },
    params: {
      ...config.params,
      api_key: `${API_KEY}`,
    },
  };
});

export const getTopRated = async (mediaType, page) => {
  try {
    const { data } = await axiosClient.get(`/${mediaType}/top_rated`);

    return {
      films: data.results.map((val) => formatResult(val, mediaType)),
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
    const { data } = await axiosClient.get(`/${mediaType}/popular`);

    return data.results.map((val) => formatResult(val, mediaType));
  } catch (error) {
    console.error(error);
  }

  return [];
};

export const getMovie = async (mediaType, id) => {
  try {
    const { data } = await axiosClient.get(`/${mediaType}/${id}`);

    return formatResult(data, mediaType);
  } catch (error) {
    console.error(error);
  }

  return [];
};

export const getCast = async (mediaType, id) => {
  try {
    const { data } = await axiosClient.get(`/${mediaType}/${id}/credits`);

    return data;
  } catch (error) {
    console.error(error);
  }

  return [];
};

export const getSimilar = async (mediaType, id) => {
  try {
    const { data } = await axiosClient.get(
      `/${mediaType}/${id}/similar?language=en-US&page=1`,
    );

    return data;
  } catch (error) {
    console.error(error);
  }

  return [];
};

export const getReviews = async (mediaType, id) => {
  try {
    const { data } = await axiosClient.get(
        `/${mediaType}/${id}/reviews?language=en-US&page=1`,
    );

    return data;
  } catch (error) {
    console.error(error);
  }

  return [];
};

export const getTrailer = async (mediaType, id) => {
  try {
    const { data } = await axiosClient.get(`/${mediaType}/${id}/videos`)

    return (
        data.results
            .filter((res) => res.site.toLowerCase() === 'youtube')
            .map((res) => ({
              id: res.id,
              key: res.key,
            })) ?? []
    )
  } catch (error) {
    console.error(error)
  }

  return []
}

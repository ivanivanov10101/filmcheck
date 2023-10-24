import axios from "axios";
import {formatResult} from "../utils";

const axiosClient = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

axiosClient.interceptors.request.use((config) => {
  return {
    ...config,
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWEzYWZjNmMyYmU0ODU5MGI4NmM3NmU4MTkxZWY5OCIsInN1YiI6IjY1MDljNzYxZmEyN2Y0MDBjYWE1YjFkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.llgJVC0hoek7A2a-DVdzKrf0oegtmsRirrzOBhN7UFo`
    },
    params: {
      ...config.params,
      api_key: "0aa3afc6c2be48590b86c76e8191ef98",
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

export const getRecs = async (mediaType, id) => {
  try {
    const { data } = await axiosClient.get(
      `/${mediaType}/${id}/recommendations?language=en-US&page=1`,
    );

    return data;
  } catch (error) {
    console.error(error);
  }

  return [];
};

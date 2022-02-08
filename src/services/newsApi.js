import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsApiHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": process.env.REACT_APP_API_HOST,
  "x-rapidapi-key": process.env.REACT_APP_API_KEY,
};

const createRequest = (url) => ({ url, headers: newsApiHeaders });

const baseUrl = process.env.REACT_APP_BASE_URL;

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => createRequest(`/news`),
    }),
    getNewsSearch: builder.query({
      query: (title) =>
        createRequest(
          `/news/search?q=${title}&freshness=Day&textFormat=Raw&safeSearch=Off`
        ),
    }),
  }),
});
export const { useGetNewsQuery, useGetNewsSearchQuery } = newsApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsApiHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "669abf29b2msh9a3c377e208b921p196dc0jsnbfd98d38ab8b",
};

const createRequest = (url) => ({ url, headers: newsApiHeaders });

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

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

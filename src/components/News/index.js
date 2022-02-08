import React from "react";
import {
  NewsCard,
  NewsCardTop,
  NewsCardMid,
  NewsCardBottom,
  NewsGrid,
  NewsCardBottomProvider,
} from "./NewsStyles";
import { useGetNewsQuery, useGetNewsSearchQuery } from "../../services/newsApi";
import moment from "moment";
import Loading from "../Loading";

const News = ({ title }) => {
  const { data, isFetching } = useGetNewsQuery();
  const { data: searchData, isFetching: loading } =
    useGetNewsSearchQuery(title);
  const newsData = title ? searchData?.value : data?.value;

  const demoImage =
    "https://www.cwhaydenonline.com/media/wysiwyg/red_button_new_customer.png";

  if (isFetching || loading) return <Loading />;

  return (
    <>
      <h2 style={{ marginTop: "13vh" }}>
        {title ? title : "Notícias em Alta"}
      </h2>
      <NewsGrid>
        {newsData?.map((item) => (
          <a href={item?.url} key={item?.url} target="_blank">
            <NewsCard>
              <NewsCardTop>
                <h4>{item?.name}</h4>
                <img
                  src={
                    item?.image?.thumbnail?.contentUrl
                      ? item?.image?.thumbnail?.contentUrl
                      : demoImage
                  }
                  alt={item?.name}
                />
              </NewsCardTop>
              <NewsCardMid>
                <p>{item?.description}</p>
              </NewsCardMid>
              <NewsCardBottom>
                <NewsCardBottomProvider>
                  <img
                    src={
                      item?.provider[0]?.image?.thumbnail?.contentUrl
                        ? item?.provider[0]?.image?.thumbnail?.contentUrl
                        : demoImage
                    }
                    alt={item?.provider[0]?.name}
                  />
                  <p>{item?.provider[0]?.name}</p>
                </NewsCardBottomProvider>
                <p>{moment(item?.datePublished).startOf("ss").fromNow()}</p>
              </NewsCardBottom>
            </NewsCard>
          </a>
        ))}
      </NewsGrid>
    </>
  );
};

export default News;

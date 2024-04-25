import { useEffect, useState } from "react";
import React from "react";

import fetchDataFromApi from "../../utils/api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import RelatedNewsTemplate from "./RelatedNewsTemplate";

const RelaedNews = ({ blogId }) => {
  const { data, loading } = useFetch(`/api/articles/${blogId}/others`);

  console.log(data , "this is data from related news")

  return (
    <>
      <div className="py-5 lg:py-10">
        <h2 className="font-bold text-3xl text-dark-blue mb-5 ">
          Some More News For You 
        </h2>
        <div className="grid grid-cols-1  m-auto  gap-8 md:grid-cols-4 xl:grid-cols-4">
          {!!data &&
            data?.relatedArticle?.map((item) => (
              <RelatedNewsTemplate data={item} />
            ))}
        </div>
      </div>
    </>
  );
};
export default RelaedNews;

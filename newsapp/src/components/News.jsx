import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";

function News() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getApi = async (pageNumber) => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f0f20faac89a4cb39ddbebe92a2f2336&page=${pageNumber}`;
    try {
      const response = await axios.get(url);
      setArticles(response.data.articles);
      setTotalPages(Math.ceil(response.data.totalResults / 20)); // Assuming 20 articles per page
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApi(currentPage);
  }, [currentPage]);

  const handleNextBtn = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousBtn = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container my-3">
      <h2>News articles</h2>
      <div className="row">
        {articles.map((element) => {
          return (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 45) : ""}
                description={
                  element.description ? element.description.slice(0, 88) : ""
                }
                image={
                  element.urlToImage
                    ? element.urlToImage
                    : "https://www.hindustantimes.com/ht-img/img/2024/05/12/1600x900/phase_4_1715514229523_1715514243628.jpg"
                }
                newsUrl={element.url}
                date={element.publishedAt}
              />
            </div>
          );
        })}
      </div>
      <div className="container d-flex justify-content-between my-3">
        <button
          type="button"
          className="btn btn-dark"
          onClick={handlePreviousBtn}
          disabled={currentPage <= 1}
        >
          &larr; Previous
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={handleNextBtn}
          disabled={currentPage >= totalPages}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}

export default News;

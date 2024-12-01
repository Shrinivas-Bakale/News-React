import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";
import Spinner from "./Spinner";
// import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  // const [totalResults, setTotalResults] = useState()

  const getApi = async (pageNumber) => {
    setLoading(true);

    // console.log(props.category);
    try {
      props.setProgressBar(10);
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apikey}&page=${pageNumber}&pageSize=${props.pageSize}`
      );
      props.setProgressBar(30);
      setArticles(response.data.articles);
      setTotalPages(Math.ceil(response.data.totalResults / props.pageSize));
      // setTotalResults(response.data.totalResults)
      let totalResults = response.data.totalResults;
      props.setProgressBar(60);
      // console.log(totalResults);
      setLoading(false);
      props.setProgressBar(80);
      document.title = `Newsmonkey-${props.category}`;
      props.setProgressBar(100);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApi(currentPage);
    // fetchData(currentPage+1);
  }, [currentPage, props.category]);

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

  // const fetchData = async (pageNumber) => {
  //   try {
  //     const response = await axios.get(
  //       `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=f0f20faac89a4cb39ddbebe92a2f2336&page=${pageNumber}&pageSize=${props.pageSize}`
  //     );
  //     setArticles(articles.concat(response.data.articles));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="container my-3">
      <h2
        className="text-center "
        style={{ marginTop: "4rem", marginBottom: "1rem" }}
      >
        {props.category} News articles
      </h2>
      {/* {loading && <Spinner />} */}
      {/* <InfiniteScroll
        dataLength={articles.length} //This is important field to render the next data
        next={fetchData}
        hasMore={currentPage < totalPages}
        loader={<Spinner />}
      > */}
      <div className="row ">
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
                    : "https://static.tnn.in/thumb/msid-110137875,thumbsize-66576,width-1280,height-720,resizemode-75/110137875.jpg"
                }
                newsUrl={element.url}
                date={element.publishedAt}
                author={element.author ? element.author : "Unknown"}
                source={element.source.name}
              />
            </div>
          );
        })}
      </div>
      {/* </InfiniteScroll> */}
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

import React, { useEffect, useState, useRef, useContext } from "react";
import { Typography, Row, Button } from "antd";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  IMAGE_SIZE,
  POSTER_SIZE,
} from "../../Config";
import MainImage from "./Sections/MainImage";
import GridCard from "../../commons/GridCards";
import { SearchContext } from "../../../context";

const { Title } = Typography;
function LandingPage() {
  const { searchedShows } = useContext(SearchContext);

  const buttonRef = useRef(null);

  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [CurrentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const endpoint = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
    fetchMovies(endpoint);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const fetchMovies = (endpoint) => {
    fetch(endpoint)
      .then((result) => result.json())
      .then((result) => {
        // console.log(result)
        // console.log('Movies',...Movies)
        // console.log('result',...result.results)
        setMovies([...Movies, ...result.results]);
        setMainMovieImage(
          MainMovieImage || searchedShows[0] || result.results[0]
        );
        setCurrentPage(result.page);
      }, setLoading(false))
      .catch((error) => console.error("Error:", error));
  };

  const loadMoreItems = () => {
    let endpoint = "";
    setLoading(true);
    console.log("CurrentPage", CurrentPage);
    endpoint = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=${
      CurrentPage + 1
    }`;
    fetchMovies(endpoint);
  };

  const handleScroll = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight - 1) {
      // loadMoreItems()
      //console.log("clicked");
      buttonRef.current && buttonRef.current.click();
    }
  };

  return (
    <div style={{ width: "100%", margin: "0" }}>
      {MainMovieImage && (
        <MainImage
          image={`${IMAGE_BASE_URL}${IMAGE_SIZE}${MainMovieImage.backdrop_path}`}
          title={MainMovieImage.name}
          text={MainMovieImage.overview}
        />
      )}

      <div style={{ width: "85%", margin: "1rem auto" }}>
        <Title level={2}> TV Shows for today </Title>

        <hr />
        <Row gutter={[16, 16]}>
          {searchedShows.length > 0
            ? searchedShows.map((movie, index) => (
                <React.Fragment key={index}>
                  <GridCard
                    image={
                      movie.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : null
                    }
                    movieId={movie.id}
                    movieName={movie.original_title}
                  />
                </React.Fragment>
              ))
            : Movies.map((movie, index) => (
                <React.Fragment key={index}>
                  <GridCard
                    image={
                      movie.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : null
                    }
                    movieId={movie.id}
                    movieName={movie.original_title}
                  />
                </React.Fragment>
              ))}
        </Row>

        {Loading && <div>Loading...</div>}

        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button ref={buttonRef} className="loadMore" onClick={loadMoreItems}>
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

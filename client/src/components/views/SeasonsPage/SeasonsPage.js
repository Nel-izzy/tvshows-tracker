import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import Season from "../SeasonPage/SeasonPage";
import { IMAGE_BASE_URL, IMAGE_SIZE, POSTER_SIZE } from "../../Config";
import MainImage from "../LandingPage/Sections/MainImage";

//const POSTER_SIZE = "w154";

const SeasonsPage = (props) => {
  const [seasons, setSeasons] = useState(props.location.state);
  const movieId = props.match.params.movieId;

  useEffect(() => {
    console.log(seasons);
  }, []);

  return (
    <div style={{ width: "85%", margin: "1rem auto" }}>
      {/* <MainImage
        image={`${IMAGE_BASE_URL}${IMAGE_SIZE}${MainMovieImage.backdrop_path}`}
        title={MainMovieImage.name}
        text={MainMovieImage.overview}
      /> */}

      <Row gutter={[16, 16]}>
        {seasons.length > 0 &&
          seasons.map((season) => (
            <React.Fragment key={season.id}>
              <Season
                image={
                  season.poster_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${season.poster_path}`
                    : null
                }
                movieId={movieId}
                seasonId={season.id}
                seasonName={season.name}
                seasonNumber={season.season_number + 1}
                episodeCount={season.episode_count}
              />
            </React.Fragment>
          ))}
      </Row>
    </div>
  );
};

export default SeasonsPage;

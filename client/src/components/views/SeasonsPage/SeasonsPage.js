import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import Season from "../SeasonPage/SeasonPage";
import { IMAGE_BASE_URL, IMAGE_SIZE, POSTER_SIZE } from "../../Config";
import MainImage from "../LandingPage/Sections/MainImage";

const SeasonsPage = (props) => {
  const [seasons, setSeasons] = useState(props.location.state.seasons);
  const movieId = props.match.params.movieId;
  const { backdrop_path, name, overview, episode_run_time } =
    props.location.state;
  console.log(props);

  return (
    <div style={{ width: "100%", margin: "0" }}>
      <MainImage
        image={`${IMAGE_BASE_URL}${IMAGE_SIZE}${backdrop_path}`}
        title={name || null}
        text={overview || null}
      />
      <div style={{ width: "85%", margin: "1rem auto" }}>
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
                  movieName={name}
                  movieRuntime={episode_run_time}
                  movieId={movieId}
                  seasonId={season.id}
                  seasonName={season.name}
                  seasonNumber={season.season_number}
                  episodeCount={season.episode_count}
                  release_date={season.air_date}
                />
              </React.Fragment>
            ))}
        </Row>
      </div>
    </div>
  );
};

export default SeasonsPage;

import React, { useEffect, useState } from "react";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  IMAGE_SIZE,
  POSTER_SIZE,
} from "../../Config";

import MainImage from "../LandingPage/Sections/MainImage";
import { Row } from "antd";
import Episode from "./EpisodePage";

const EpisodesPage = (props) => {
  const { movieId, seasonNumber } = props.match.params;

  const { seasonId, image, seasonName, movieName, movieRuntime } =
    props.location.state;
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const endpoint = `${API_URL}/tv/${movieId}/season/${seasonNumber}?api_key=${API_KEY}&language=en-US&page=1`;
    fetchEpisodes(endpoint);
  }, []);

  function fetchEpisodes(endpoint) {
    fetch(endpoint)
      .then((result) => result.json())
      .then((result) => {
        setEpisodes(result.episodes);
      });
  }

  return (
    <div style={{ width: "100%", margin: "0" }}>
      <MainImage
        image={`${IMAGE_BASE_URL}${IMAGE_SIZE}${image}`}
        title={movieName}
        text={seasonName}
      />
      <div style={{ width: "85%", margin: "1rem auto" }}>
        <Row gutter={[16, 16]}>
          {episodes &&
            episodes.map((episode) => (
              <React.Fragment key={episode.id}>
                <Episode
                  image={
                    episode.still_path
                      ? `${IMAGE_BASE_URL}${POSTER_SIZE}${episode.still_path}`
                      : image
                  }
                  movieId={movieId}
                  movieName={movieName}
                  movieRuntime={movieRuntime}
                  seasonName={seasonName}
                  seasonId={seasonId}
                  episodeId={episode.id}
                  overview={episode.overview}
                  episodeName={episode.name}
                  seasonNumber={episode.season_number}
                  episodeNumber={episode.episode_number}
                  voteCount={episode.vote_count}
                  voteAverage={episode.vote_average}
                  release_date={episode.air_date}
                />
              </React.Fragment>
            ))}
        </Row>
      </div>
    </div>
  );
};

export default EpisodesPage;

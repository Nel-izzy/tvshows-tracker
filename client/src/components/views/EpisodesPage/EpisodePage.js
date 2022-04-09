import React from "react";
import { Col } from "antd";
import { Link } from "react-router-dom";

const EpisodePage = (episode) => {
  return (
    <div>
      <Col key={episode.seasonId} lg={6} md={8} xs={24}>
        <div style={{ position: "relative" }}>
          <Link
            to={{
              pathname: `/movie/${episode.movieId}/seasons/${episode.seasonNumber}/episodes/${episode.episodeId}`,
              state: episode,
            }}
          >
            <img
              style={{ width: "100%", height: "320px" }}
              alt={episode.name}
              src={episode.image}
            />
          </Link>
        </div>
      </Col>
    </div>
  );
};

export default EpisodePage;

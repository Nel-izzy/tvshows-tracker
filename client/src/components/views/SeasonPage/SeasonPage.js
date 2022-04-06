import React from "react";
import { Col } from "antd";

const SeasonPage = ({ seasonId, seasonName, episodeCount, image, movieId }) => {
  return (
    <div>
      <Col key={seasonId} lg={6} md={8} xs={24}>
        <div style={{ position: "relative" }}>
          <a href={`/movie/${movieId}/seasons/${seasonId}`}>
            <img
              style={{ width: "100%", height: "320px" }}
              alt={seasonName}
              src={image}
            />
          </a>
        </div>
      </Col>
    </div>
  );
};

export default SeasonPage;

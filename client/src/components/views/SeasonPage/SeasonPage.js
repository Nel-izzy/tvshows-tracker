import React from "react";
import { Col } from "antd";
import { Link } from "react-router-dom";

const SeasonPage = (season) => {
  return (
    <div>
      <Col key={season.seasonId} lg={6} md={8} xs={24}>
        <div style={{ position: "relative" }}>
          <Link
            to={{
              pathname: `/movie/${season.movieId}/seasons/${season.seasonNumber}`,
              state: season,
            }}
          >
            <img
              style={{ width: "100%", height: "320px" }}
              alt={season.seasonName}
              src={season.image}
            />
          </Link>
        </div>
      </Col>
    </div>
  );
};

export default SeasonPage;

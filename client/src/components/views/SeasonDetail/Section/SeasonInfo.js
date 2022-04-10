import React, { useState } from "react";
import { Descriptions } from "antd";
import { Link } from "react-router-dom";

const SeasonInfo = (props) => {
  const [season, setSeason] = useState(props.location.state);
  return (
    <div style={{ width: "85%", margin: "1rem auto" }}>
      <Descriptions title="Season Info" bordered>
        <Descriptions.Item label="Title">{season.seasonName}</Descriptions.Item>
        <Descriptions.Item label="Release Date">
          {season.release_date}{" "}
        </Descriptions.Item>
        <Descriptions.Item label="Season">
          {season.seasonNumber}
        </Descriptions.Item>
        <Descriptions.Item label="Episodes">
          {season.episodeCount}{" "}
          <Link
            to={{
              pathname: `/movie/${season.movieId}/seasons/${season.seasonNumber}/episodes`,
              state: season,
            }}
          >
            (View all)
          </Link>
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default SeasonInfo;

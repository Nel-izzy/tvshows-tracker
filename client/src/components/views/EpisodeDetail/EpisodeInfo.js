import React, { useState } from "react";
import { Descriptions } from "antd";

const EpisodeInfo = (props) => {
  const [episode] = useState(props.location.state);
  const {
    release_date,
    episodeNumber,
    seasonId,
    episodeName,
    image,
    overview,
    seasonNumber,
    voteCount,
    voteAverage,
  } = episode;

  return (
    <div style={{ width: "85%", margin: "1rem auto" }}>
      <Descriptions title="Episode Info" bordered>
        <Descriptions.Item label="Title">{episodeName}</Descriptions.Item>
        <Descriptions.Item label="Release Date">
          {release_date}
        </Descriptions.Item>
        <Descriptions.Item label="Episode">{episodeNumber}</Descriptions.Item>
        <Descriptions.Item label="Vote Average">
          {voteAverage}
        </Descriptions.Item>
        <Descriptions.Item label="Vote count">{voteCount}</Descriptions.Item>
        <Descriptions.Item label="Season">{seasonNumber}</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default EpisodeInfo;

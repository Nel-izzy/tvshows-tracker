import React from "react";
import EpisodeInfo from "./EpisodeInfo";
import { IMAGE_BASE_URL, IMAGE_SIZE } from "../../Config";
import MainImage from "../LandingPage/Sections/MainImage";

const EpisodeDetail = (props) => {
  const { episodeName, image, overview } = props.location.state;
  return (
    <div style={{ width: "100%", margin: "0" }}>
      <MainImage
        image={`${IMAGE_BASE_URL}${IMAGE_SIZE}${image}`}
        title={episodeName || null}
        text={overview}
      />
      <EpisodeInfo {...props} />
    </div>
  );
};

export default EpisodeDetail;

import React from "react";
import EpisodeInfo from "./EpisodeInfo";
import { IMAGE_BASE_URL, IMAGE_SIZE } from "../../Config";
import MainImage from "../LandingPage/Sections/MainImage";
import Viewed from "../EpisodesPage/Viewed";

const EpisodeDetail = (props) => {
  const {
    episodeName,
    episodeId,
    image,
    overview,
    movieName,
    movieRuntime,
    seasonName,
    episodeNumber,
  } = props.location.state;
  console.log(props);
  return (
    <div style={{ width: "100%", margin: "0" }}>
      <MainImage
        image={`${IMAGE_BASE_URL}${IMAGE_SIZE}${image}`}
        title={episodeName || null}
        text={overview}
      />
      <div
        style={{
          display: "flex",
          marginTop: "10px",
          justifyContent: "flex-end",
        }}
      >
        <Viewed
          seasonName={seasonName}
          movieName={movieName}
          episodeId={episodeId}
          image={image}
          episodeNumber={episodeNumber}
          movieRuntime={movieRuntime}
          userFrom={localStorage.getItem("userId")}
        />
      </div>
      <EpisodeInfo {...props} />
    </div>
  );
};

export default EpisodeDetail;

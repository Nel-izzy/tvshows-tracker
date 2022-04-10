import React from "react";
import SeasonInfo from "./SeasonInfo";
import { IMAGE_BASE_URL, IMAGE_SIZE } from "../../../Config";
import MainImage from "../../LandingPage/Sections/MainImage";
import Viewed from "./Viewed";

const SeasonDetail = (props) => {
  const { image, seasonName, seasonId, episodeCount, movieName, movieRuntime } =
    props.location.state;
  console.log(props);
  return (
    <div style={{ width: "100%", margin: "0" }}>
      <MainImage
        image={`${IMAGE_BASE_URL}${IMAGE_SIZE}${image}`}
        title={movieName || null}
        text={seasonName}
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
          seasonId={seasonId}
          image={image}
          movieRuntime={movieRuntime}
          episodeCount={episodeCount}
          userFrom={localStorage.getItem("userId")}
        />
      </div>
      <SeasonInfo {...props} />
    </div>
  );
};

export default SeasonDetail;

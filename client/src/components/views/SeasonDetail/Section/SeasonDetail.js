import React from "react";
import SeasonInfo from "./SeasonInfo";
import { IMAGE_BASE_URL, IMAGE_SIZE } from "../../../Config";
import MainImage from "../../LandingPage/Sections/MainImage";

const SeasonDetail = (props) => {
  const { image, seasonName } = props.location.state;
  return (
    <div style={{ width: "100%", margin: "0" }}>
      <MainImage
        image={`${IMAGE_BASE_URL}${IMAGE_SIZE}${image}`}
        title={seasonName || null}
      />
      <SeasonInfo {...props} />
    </div>
  );
};

export default SeasonDetail;

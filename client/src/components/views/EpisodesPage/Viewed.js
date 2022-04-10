import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "antd";
import { useSelector } from "react-redux";

function Viewed(props) {
  const user = useSelector((state) => state.user);

  const movieId = props.episodeId;
  const userFrom = props.userFrom;
  const movieTitle =
    props.movieName +
    " | " +
    props.seasonName +
    " | " +
    "Episode " +
    props.episodeNumber;
  const moviePost = props.image;
  const movieRunTime = props.movieRuntime && props.movieRuntime.toString();

  const [ViewedNumber, setViewedNumber] = useState(0);
  const [Viewed, setViewed] = useState(false);
  const variables = {
    movieId: movieId,
    userFrom: userFrom,
    movieTitle: movieTitle,
    moviePost: moviePost,
    movieRunTime: movieRunTime,
  };

  const onClickViewed = () => {
    if (user.userData && !user.userData.isAuth) {
      return alert("Please Log in first");
    }

    if (Viewed) {
      //when we are already subscribed
      axios.post("/api/viewed/removeFromViewed", variables).then((response) => {
        if (response.data.success) {
          setViewedNumber(ViewedNumber - 1);
          setViewed(!Viewed);
        } else {
          alert("Failed to Remove From Viewed");
        }
      });
    } else {
      // when we are not subscribed yet

      axios.post("/api/Viewed/addToViewed", variables).then((response) => {
        if (response.data.success) {
          setViewedNumber(ViewedNumber + 1);
          setViewed(!Viewed);
        } else {
          alert("Failed to Add To Viewed");
        }
      });
    }
  };

  useEffect(() => {
    axios.post("/api/viewed/ViewedNumber", variables).then((response) => {
      if (response.data.success) {
        setViewedNumber(response.data.subscribeNumber);
      } else {
        alert("Failed to get Viewed Number");
      }
    });

    axios.post("/api/viewed/Viewed", variables).then((response) => {
      if (response.data.success) {
        setViewed(response.data.subcribed);
      } else {
        alert("Failed to get Viewed Information");
      }
    });
  }, []);

  return (
    <>
      <Button onClick={onClickViewed}>
        {" "}
        {!Viewed ? "Mark as Viewed" : "Not Viewed"} {ViewedNumber}
      </Button>
    </>
  );
}

export default Viewed;

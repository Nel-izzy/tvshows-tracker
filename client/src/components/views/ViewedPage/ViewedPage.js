import React, { useEffect, useState } from "react";
import { Typography, Popover, Button } from "antd";
import axios from "axios";
//import "./viewed.css";
import { useSelector } from "react-redux";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../Config";

const { Title } = Typography;

function ViewedPage() {
  const user = useSelector((state) => state.user);

  const [views, setViews] = useState([]);
  const [Loading, setLoading] = useState(true);
  let variable = { userFrom: localStorage.getItem("userId") };

  useEffect(() => {
    fetchViewedMovie();
  }, []);

  const fetchViewedMovie = () => {
    axios.post("/api/viewed/getViewedMovie", variable).then((response) => {
      if (response.data.success) {
        console.log(response.data.views);
        setViews(response.data.views);
        setLoading(false);
      } else {
        alert("Failed to get subscription videos");
      }
    });
  };

  const onClickDelete = (movieId, userFrom) => {
    const variables = {
      movieId: movieId,
      userFrom: userFrom,
    };

    axios.post("/api/viewed/removeFromViewed", variables).then((response) => {
      if (response.data.success) {
        fetchViewedMovie();
      } else {
        alert("Failed to Remove From viewed");
      }
    });
  };

  const renderCards = views.map((viewed, index) => {
    const content = (
      <div>
        {viewed.moviePost ? (
          <img src={`${IMAGE_BASE_URL}${POSTER_SIZE}${viewed.moviePost}`} />
        ) : (
          "no image"
        )}
      </div>
    );

    return (
      <tr key={index}>
        <Popover content={content} title={`${viewed.movieTitle}`}>
          <td>{viewed.movieTitle}</td>
        </Popover>

        <td>{viewed.movieRunTime} mins</td>
        <td>
          <button
            onClick={() => onClickDelete(viewed.movieId, viewed.userFrom)}
          >
            {" "}
            Remove{" "}
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <Title level={2}> Movies viewed By Me </Title>
      <hr />
      {user.userData && !user.userData.isAuth ? (
        <div
          style={{
            width: "100%",
            fontSize: "2rem",
            height: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>Please Log in first...</p>
          <a href="/login">Go to Login page</a>
        </div>
      ) : (
        !Loading && (
          <table>
            <thead>
              <tr>
                <th>Movie Title</th>
                <th>Movie RunTime</th>
                <td>Remove from views</td>
              </tr>
            </thead>
            <tbody>{renderCards}</tbody>
          </table>
        )
      )}
    </div>
  );
}

export default ViewedPage;

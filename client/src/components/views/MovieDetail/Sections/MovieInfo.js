import React from "react";
import { Descriptions, Badge } from "antd";
import { Link } from "react-router-dom";

function MovieInfo(props) {
  const { movie } = props;

  console.log(movie);

  return (
    <Descriptions title="Movie Info" bordered>
      <Descriptions.Item label="Title">{movie.name}</Descriptions.Item>
      <Descriptions.Item label="release_date">
        {movie.first_air_date}
      </Descriptions.Item>
      <Descriptions.Item label="Seasons">
        {movie.number_of_seasons}
        {"  "}
        <Link
          to={{
            pathname: `/movie/${movie.id}/seasons`,
            state: movie.seasons,
          }}
        >
          (View All)
        </Link>
      </Descriptions.Item>
      <Descriptions.Item label="runtime">
        {movie.episode_run_time}
      </Descriptions.Item>
      <Descriptions.Item label="vote_average">
        {movie.vote_average}
      </Descriptions.Item>
      <Descriptions.Item label="Episodes">
        {movie.number_of_episodes}
      </Descriptions.Item>
      <Descriptions.Item label="vote_count">
        {movie.vote_count}
      </Descriptions.Item>
      <Descriptions.Item label="status">{movie.status}</Descriptions.Item>
      <Descriptions.Item label="popularity">
        {movie.popularity}
      </Descriptions.Item>
    </Descriptions>
  );
}

export default MovieInfo;

import React from "react";
import styled from "styled-components";

const MovieList = ({ movies }) => {
  return (
    <Grid>
      {movies.map((movie) => (
        <Card key={movie.id}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <Title>{movie.title}</Title>
          <Rating>⭐ {movie.vote_average}</Rating>
        </Card>
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h3`
  font-size: 16px;
  margin: 10px 0;
  color: #333;
`;

const Rating = styled.p`
  font-size: 14px;
  color: #777;
`;

export default MovieList;

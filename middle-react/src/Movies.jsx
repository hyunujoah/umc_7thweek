import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Movies = () => {
  return (
    <Container>
      <h1>카테고리</h1>
      <ButtonGrid>
        <CategoryButton to="/movies/now-playing">
          현재 상영중인
        </CategoryButton>
        <CategoryButton to="/movies/popular">
          인기 있는
        </CategoryButton>
        <CategoryButton to="/movies/top-rated">
          높은 평가를 받은
        </CategoryButton>
        <CategoryButton to="/movies/up-coming">
          개봉 예정중인
        </CategoryButton>
      </ButtonGrid>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 20px;
`;

const CategoryButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-decoration: none;
  color: #000;
  font-weight: bold;
  font-size: 16px;
  background-color: #f9f9f9;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f50057;
    color: #fff;
  }
`;

export default Movies;

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "./fetchMovies";

const Home = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["all-movies"],
    queryFn: () => fetchMovies("popular"), // 인기 있는 영화로 임시 데이터 설정
  });

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>데이터를 가져오는 중 오류가 발생했습니다.</p>;

  return (
    <div>
      <h1>전체 영화 목록</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
        {data.results.map((movie) => (
          <div key={movie.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <h3>{movie.title}</h3>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%" }}
            />
            <p>평점: {movie.vote_average}</p>
            <p>개봉일: {movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

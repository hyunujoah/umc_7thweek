import React, { useRef, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchMovies } from "./fetchMovies";
import MovieList from "./MovieList";
import { BeatLoader } from "react-spinners";
import styled from "styled-components";

const UpComing = () => {
  const { 
    data, 
    fetchNextPage, 
    isFetchingNextPage, 
    hasNextPage, 
    isLoading, 
    error 
  } = useInfiniteQuery({
    queryKey: ["upcoming"],
    queryFn: ({ pageParam = 1 }) => fetchMovies("upcoming", pageParam),
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
  });

  const observerRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const lastMovieElementRef = (node) => {
    if (isFetchingNextPage) return;

    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        setIsIntersecting(true);
        fetchNextPage();
      } else {
        setIsIntersecting(false);
      }
    });

    if (node) observerRef.current.observe(node);
  };

  // 에러 발생 시 처리
  if (error) return <p>에러가 발생했습니다: {error.message}</p>;

  // 초기 로딩 상태 처리
  if (isLoading) {
    return (
      <SpinnerContainer>
        <BeatLoader color="#3498db" />
      </SpinnerContainer>
    );
  }

  return (
    <Container>
      <h1>개봉 예정 영화</h1>
      {data.pages.map((page, pageIndex) => (
        <MovieList key={pageIndex} movies={page.results} />
      ))}
      <div ref={lastMovieElementRef} />
      {isFetchingNextPage && (
        <SpinnerContainer>
          <BeatLoader color="#3498db" />
        </SpinnerContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const SpinnerContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;

export default UpComing;

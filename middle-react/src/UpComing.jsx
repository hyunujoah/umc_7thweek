import React, { useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchMovies } from "./fetchMovies";
import MovieList from "./MovieList";
import styled from "styled-components";

const UpComing = () => {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["upcoming"],
      queryFn: ({ pageParam = 1 }) => fetchMovies("upcoming", pageParam),
      getNextPageParam: (lastPage) =>
        lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    });

  const observerRef = useRef();

  const lastMovieElementRef = (node) => {
    if (isFetchingNextPage) return;
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });
    if (node) observerRef.current.observe(node);
  };

  if (!data) return <p>로딩 중...</p>;

  return (
    <Container>
      <h1>개봉 예정중인 영화</h1>
      {data.pages.map((page, pageIndex) => (
        <MovieList
          key={pageIndex}
          movies={page.results}
        />
      ))}
      <div ref={lastMovieElementRef} />
      {isFetchingNextPage && <Spinner>로딩 중...</Spinner>}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Spinner = styled.div`
  text-align: center;
  margin: 20px 0;
  font-size: 16px;
  color: #555;
`;

export default UpComing;

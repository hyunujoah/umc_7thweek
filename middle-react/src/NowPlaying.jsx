import React, { useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchMovies } from "./fetchMovies";
import MovieList from "./MovieList";
import { BeatLoader } from "react-spinners";
import styled from "styled-components";

const NowPlaying = () => {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["now-playing"],
      queryFn: ({ pageParam = 1 }) => fetchMovies("now_playing", pageParam),
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
      <h1>현재 상영중인 영화</h1>
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

export default NowPlaying;

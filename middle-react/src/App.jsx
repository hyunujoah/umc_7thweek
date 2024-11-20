import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Search from "./Search";
import Login from "./Login";
import Signup from "./Signup";
import Movies from "./Movies";
import NowPlaying from "./NowPlaying";
import Popular from "./Popular";
import TopRated from "./TopRated";
import UpComing from "./UpComing";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
          <Navbar />
          <div style={{ display: "flex", flex: 1 }}>
            <Sidebar />
            <div style={{ flex: 1, padding: "1rem" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/now-playing" element={<NowPlaying />} />
                <Route path="/movies/popular" element={<Popular />} />
                <Route path="/movies/top-rated" element={<TopRated />} />
                <Route path="/movies/up-coming" element={<UpComing />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;

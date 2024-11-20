import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMovie } from "react-icons/md";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <NavItem>
        <AiOutlineSearch />
        <Link to="/search">찾기</Link>
      </NavItem>
      <NavItem>
        <MdMovie />
        <Link to="/movies">영화</Link>
      </NavItem>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #121212;
  color: white;
  width: 200px;
  padding: 1rem;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  a {
    text-decoration: none;
    color: white;
    margin-left: 1rem;
  }
`;

export default Sidebar;

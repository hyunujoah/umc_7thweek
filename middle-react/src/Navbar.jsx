import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Logo>
        <Link to="/">YONGCHA</Link>
      </Logo>
      <Buttons>
        <StyledLink to="/login">로그인</StyledLink>
        <StyledLink to="/signup">회원가입</StyledLink>
      </Buttons>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #202020;
  color: white;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  a {
    text-decoration: none;
    color: #f50057;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  padding: 0.5rem 1rem;
  border: 1px solid #f50057;
  border-radius: 5px;
  text-decoration: none;
  color: #f50057;
  font-weight: bold;
  transition: 0.3s;
  &:hover {
    background-color: #f50057;
    color: white;
  }
`;

export default Navbar;

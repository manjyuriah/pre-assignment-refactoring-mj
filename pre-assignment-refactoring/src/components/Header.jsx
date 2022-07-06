import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { MdHomeFilled } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { GrLogout } from "react-icons/gr";
import { FiPlusSquare } from "react-icons/fi";
import { ImCompass2 } from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai";

export default function Header() {
  const storageClean = () => {
    localStorage.clear();
  };

  return (
    <Body>
      <Bundle>
        <Instagram>Instagram</Instagram>
        <Search>
          <BsSearch opacity="50%" />
          <Input type="text" placeholder="검색" />
        </Search>
        <Icons>
          <StyledLink to="">
            <MdHomeFilled size="30px" cursor="pointer" />
          </StyledLink>
          <StyledLink to="">
            <FiSend size="25px" cursor="pointer" />
          </StyledLink>
          <StyledLink to="">
            <FiPlusSquare size="25px" cursor="pointer" />
          </StyledLink>
          <StyledLink to="">
            <ImCompass2 size="25px" cursor="pointer" />
          </StyledLink>
          <StyledLink to="">
            <AiOutlineHeart size="25px" cursor="pointer" />
          </StyledLink>
          <StyledLink to="/">
            <GrLogout
              size="25px"
              cursor="pointer"
              onClick={() => storageClean()}
            />
          </StyledLink>
        </Icons>
      </Bundle>
    </Body>
  );
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: black;
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  height: 10vh;
  min-width: 520px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;

const Bundle = styled.div`
  @media (max-width: 675px) {
    width: 80%;
    margin: 0 1.5rem;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 5rem;
`;

const Instagram = styled.div`
  @media (max-width: 675px) {
    font-size: 25px;
  }
  font-size: 35px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px 0 10px 10px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  width: 20rem;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 15%;
`;

const Search = styled.div`
  display: flex;
  @media (max-width: 675px) {
    display: none;
    /* justify-content: space-between; */
  }
  align-items: center;
  padding: 1px 10px;
  width: 20vw;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

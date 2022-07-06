import React from "react";
import { BsSearch } from "react-icons/bs";
import { MdHomeFilled } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { GrLogout } from "react-icons/gr";
import { FiPlusSquare } from "react-icons/fi";
import { ImCompass2 } from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai";
import {StyledLink, Body, Bundle, Instagram, Input, Icons, Search} from './styles/headerStyle'

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

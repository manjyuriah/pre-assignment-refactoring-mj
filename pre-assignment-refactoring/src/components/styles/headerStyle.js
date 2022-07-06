import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    color: black;
`;

export const Body = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    height: 10vh;
    min-width: 520px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;

export const Bundle = styled.div`
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

export const Instagram = styled.div`
    @media (max-width: 675px) {
        font-size: 25px;
    }
    font-size: 35px;
    font-weight: bold;
`;

export const Input = styled.input`
padding: 10px 0 10px 10px;
background-color: rgba(0, 0, 0, 0);
border: none;
width: 20rem;
`;

export const Icons = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 15%;
`;

export const Search = styled.div`
    display: flex;
    @media (max-width: 675px) {
        display: none;
    }
    align-items: center;
    padding: 1px 10px;
    width: 20vw;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`;

import styled from "styled-components";

export const LoginDiv = styled.div `
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const LoginSection = styled.section`
    background-color: #ffffff;
    border: 1px solid #dbdbdb;
    width: 350px;
    height: 396px;;
    margin-bottom: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;
`

export const LogoImg = styled.img `
    width: 175px;
    margin-top: 30px;
    margin-bottom: 30px;
`

export const LoginInput = styled.input `
    width: 258px;
    height: 36px;
    background-color: #fafafa;
    border: 1px solid ${prop => prop.color ? "#dbdbdb" : "red"};
    border-radius: 5px;
    font-size: 14px;
    margin-bottom: 10px;
    padding-left: 7px;

    ::placeholder {
        font-size: 12px;
    }
`

export const LoginButton = styled.button`
    background-color: ${props => props.color ? "#0095f6" : "#91d4ff"};
    width: 258px;
    height: 36px;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    margin-bottom: 20px;
    cursor: pointer;
`

export const LoginSocial = styled.div`
    color: #385085;
    font-weight: bold;
    font-size: 14px;

    img {
        width: 16px;
        height: 16px;
        margin-right:8px;
    }

    p {
        font-size: 12px;
        font-weight: 500;
        margin-top: 15px;
    }
`

export const Signup = styled.section`
    background-color: white;
    border: 1px solid #dbdbdb;
    width: 350px;
    height: 63px;
    margin-bottom: 10px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        color: #0095f6;
        font-weight: bold;
    }
`

export const LoginDownload = styled.section `
    font-size: 14px;

    p {
        margin: 10px;
    }

    img {
        width: 136px;
        margin-top: 10px;
        margin-left: 5px;
        margin-right: 5px;
    }
`
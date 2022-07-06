import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkRegexp } from "../components/RegExp";
import { LoginDiv, LoginSection, LogoImg, LoginInput, LoginButton, LoginSocial, Signup, LoginDownload } from '../components/styles/loginStyle'

//임시 유저 정보
const userInfo = {
  email: "arong@dog.com",
  pwd: "Arong1234!",
};

const Login = () => {
  const navigate = useNavigate();

  const localStorage = window.localStorage;
  const [validBtn, setValidBtn] = useState(false);
  const [user, setUser] = useState({
    email: null,
    pwd: null,
  });

  const emailRef = useRef();
  const pwdRef = useRef();

  //이메일과 비밀번호 유효성 검사
  const checkValidInfo = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    const result = checkRegexp(key, value);
    if (result) {
      setUser({ ...user, [key]: value });
    }
  };
  useEffect(() => {
    if (user.email && user.pwd) {
      setValidBtn(true);
    }
  });

  const handleLogin = () => {
    console.log(user.email)
    if (user.email === userInfo.email && user.pwd === userInfo.pwd) {
      //localStorage에 아이디와 비밀번호 저장
      localStorage.setItem("email", user.email);
      localStorage.setItem("pwd", user.pwd);
      navigate("/feeds");
    } else {
      alert("이메일 또는 비밀번호가 틀립니다.");
      emailRef.current.value = "";
      pwdRef.current.value = "";
    }
  };

  return (
    <LoginDiv>
      <LoginSection>
        <div>
          <LogoImg
            className="logo"
            src={process.env.PUBLIC_URL + "/assets/insta-logo.png"}
            alt="로고"
          />
          <LoginInput
            color={user.email}
            placeholder="전화번호, 사용자 이름 또는 이메일"
            id="email"
            ref={emailRef}
            onChange={checkValidInfo}
          />
          <LoginInput
            color={user.pwd}
            placeholder="비밀번호"
            type="password"
            id="pwd"
            ref={pwdRef}
            onChange={checkValidInfo}
          />
          <LoginButton
            color={validBtn}
            disabled={!validBtn}
            onClick={handleLogin}
          >
            로그인
          </LoginButton>
          <div className="line"></div>
          <span>또는</span>
        </div>
        <LoginSocial>
          <p>
            <img src={process.env.PUBLIC_URL + '/assets/facebook-logo.png'} alt="페이스북 로고"/>
            Facebook으로 로그인
          </p>
          <p className="find-pwd">비밀번호를 잊으셨나요?</p>
        </LoginSocial>
      </LoginSection>
      <Signup>
        <div>
          계정이 없으신가요?<span> 가입하기</span>
        </div>
      </Signup>
      <LoginDownload>
        <p>앱을 다운로드하세요.</p>
        <img src={process.env.PUBLIC_URL + '/assets/login-apple.png'} alt="애플스토어"/>
        <img src={process.env.PUBLIC_URL + '/assets/login-google.png'} alt="플레이스토어"/>
      </LoginDownload>
    </LoginDiv>
  );
};

export default Login;

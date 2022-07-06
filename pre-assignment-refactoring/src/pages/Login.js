import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkRegexp } from "../components/RegExp";

//임시 유저 정보
const userInfo = {
  email: "arong@dog.com",
  pwd: "Arong1234!",
};

const Login = () => {
  const navigate = useNavigate();

  const localStorage = window.localStorage;
  const [validBtn, setValidBtn] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({
    email: null,
    pwd: null,
  });

  const idRef = useRef();
  const pwdRef = useRef();

  //이메일과 비밀번호 유효성 검사
  const checkValidInfo = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    const result = checkRegexp(key, value);
    if (result) {
      setUser({ ...user, [key]: value });
      console.log(user.email);
    }
  };
  useEffect(() => {
    if (user.email && user.pwd) {
      setValidBtn(true);
    }
  });

  const handleLogin = () => {
    if (user.email === userInfo.email && user.pwd === userInfo.pwd) {
      //localStorage에 아이디와 비밀번호 저장
      localStorage.setItem("email", user.email);
      localStorage.setItem("pwd", user.pwd);
      setIsLogged(true);
      navigate("/feed");
    } else {
      alert("이메일 또는 비밀번호가 틀립니다.");
      idRef.current.value = "";
      pwdRef.current.value = "";
    }
  };

  return (
    <div className="Login">
      <section className="login-input">
        <div>
          <img
            className="logo"
            src={process.env.PUBLIC_URL + "/assets/insta-logo.png"}
            alt="로고"
          />
          <input
            className={user.email ? "input-valid" : "input-invalid"}
            placeholder="전화번호, 사용자 이름 또는 이메일"
            id="email"
            ref={idRef}
            onChange={checkValidInfo}
          />
          <input
            className={user.pwd ? "input-valid" : "input-invalid"}
            placeholder="비밀번호"
            type="password"
            id="pwd"
            ref={pwdRef}
            onChange={checkValidInfo}
          />
          <button
            className={validBtn ? "btn-activate" : "btn-disabled"}
            disabled={!validBtn}
            onClick={handleLogin}
          >
            로그인
          </button>
          <div className="line"></div>
          <span>또는</span>
        </div>
        <div className="login-sns">
          <p>
            <img src={process.env.PUBLIC_URL + '/assets/facebook-logo.png'} alt="페이스북 로고"/>
            Facebook으로 로그인
          </p>
          <p className="find-pwd">비밀번호를 잊으셨나요?</p>
        </div>
      </section>
      <section className="login-signup">
        <div>
          계정이 없으신가요?<span> 가입하기</span>
        </div>
      </section>
      <section className="login-download">
        <p>앱을 다운로드하세요.</p>
        <img src={process.env.PUBLIC_URL + '/assets/login-apple.png'} alt="애플스토어"/>
        <img src={process.env.PUBLIC_URL + '/assets/login-google.png'} alt="플레이스토어"/>
      </section>
    </div>
  );
};

export default Login;

import { useState, useEffect } from "react";
import Feed from "../components/Feed/Feed";
import styled from "styled-components";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function Feeds() {
  const [feedlist, setFeedList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('email')) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/');
    }
  })
  //json 파일 가져오기
  useEffect(() => {
    fetch("data/feedList.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (feedList) {
        setFeedList(feedList);
      });
  }, []);

  return (
    <>
      <Header />
      <Ul>
        {feedlist.map((data) => {
          return <Feed feed={data} key={data.id} />;
        })}
      </Ul>
    </>
  );
}
export default Feeds;

//...styled components
const Ul = styled.ul`
  width: 500px;
  margin: 0 auto;
`;

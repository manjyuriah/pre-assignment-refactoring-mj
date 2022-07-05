import { useState, useEffect } from 'react';
import Feed from "../components/Feed";
import styled from 'styled-components';

function Feeds(){
    const [feedlist, setFeedList] = useState([]);

    //json 파일 가져오기
    useEffect(() => {
      fetch('data/feedList.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (feedList) {
          setFeedList(feedList);
        });
    }, []);

    return(
        <Ul>
            {feedlist.map((data) => {
                return <Feed feed={data} key={data.id} />;
            })}
        </Ul>
    )
}
export default Feeds;

//...styled components
const Ul = styled.ul`
  width: 500px;
  margin: 0 auto;
`;
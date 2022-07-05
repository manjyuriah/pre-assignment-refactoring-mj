import Feed from "../components/Feed";
import styled from 'styled-components';
function Feeds(){
    return(
        <>
            <Ul>
                <Feed />
            </Ul>
        </>
    )

}
export default Feeds;

//...styled components
const Ul = styled.ul`
  width: 100%;
  height: 100%;
  color: white;
  font-size: 14px;
  font-weight: 600;
  background-color:Red;
`;
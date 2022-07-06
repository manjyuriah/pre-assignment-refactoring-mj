# 프리온보딩 프론트엔드 코스 7팀의 사전과제 리팩토링  

## 👥 멤버  
김민주, 심채영, 이정민, 추연빈

## 📝 어떻게 바꾸었는가
- 전체적인 파일 이름과 구조 정리
- 페이지
    - 로그인.js : 심채영
        - 유효성 검사 함수를 따로 분리하여 렌더링 최적화
        - 이메일과 비밀번호 로직을 하나로 합쳐 함수를 간결하게 짬
        
        **components/RegExp.js**
        
        ```jsx
        const regexp = {
            email: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
            pwd : /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        }
        
        export const checkRegexp = (key, value) => {
            const testRegexp = new RegExp(regexp[key])
            const result = testRegexp.test(value)
            return result
        }
        ```
        
        **pages/Login.js**
        
        ```jsx
        //이메일과 비밀번호 유효성 검사
          const checkValidInfo = (e) => {
            const key = e.target.id
            const value = e.target.value
            const result = checkRegexp(key, value)
            if (result){
                setUser({...user, [key]:value})
            }
          }
        ```
        
        - css를 styled-component로 변환
    - Feeds.js : 김민주
        1. 불필요한 주석 설명
            1. 함수명이나 변수명을 좀 더 명시적으로 하기
        2. Scss로 작성된 CSS를 Styled-component로 수정하기
            1. 공통 디자인은 미리 코드 만들어 두고 가져다 쓰기
        3. 통일되지 않은 함수의 선언 방식
            1. 화살표 함수로 통일
- 컴포넌트
    - 게시글 하나 : 추연빈
        
        comment 댓글 입력시 페이지 전체가 렌더링 되는현상 고침
        
        **기존코드**
        
        ```jsx
        const addComment = useCallback((feedId, nickname, content) => {
            setFeeds((feeds) => {
              const updated = { ...feeds };
              updated[feedId].comments.push({ nickname, content });
              return updated;
            });
          }, []);
        ```
        
        **해결방안**
        
        ```jsx
        const Feed = ({ feed }) => {
          const [loading, setLoading] = useState(true);
          const [comments, setComments] = useState(feed.comments);
        
          const addComment = useCallback(comment => {
            setComments(comments => {
              const updated = [...comments];
              updated.push(comment);
              return updated;
            });
          }, []); 
        ```
        
    - JSON
        
        ```
        {
            "id" : 1,
            "nickname" : "james",
            "img": "https://source.unsplash.com/random/600x500",
            "like": 5,
            "content": "어렵지만 해볼래! 난 할 수 있어.",
            "comments": [
              {
        				"nickname": "hello1",
                "content": "파이팅! 너라면 잘 해낼거야."
              }, {
        				"nickname": "hello2",
                "content" : "우리 모두 힘내자."
              }
            ]
          },
        ```
        
    - 헤더 : 이정민
        
        로그아웃시 페이지 이동을 리액트 라우터의 <Link>를 활용
        
### ⚠️ error
![error](https://user-images.githubusercontent.com/73277502/177492931-037a5820-a718-4619-b449-07d1e97aa581.png)
- 로그인페이지에 styled-component를 적용했을 때의 경고
- ⬇️기존코드
```
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
```
user.email은 non-boolean값인데 boolean값으로 false를 받았다는 의미

- ⬇️수정코드
```
<LoginInput
  color={user.email ? user.email : undefined}
  placeholder="전화번호, 사용자 이름 또는 이메일"
  id="email"
  ref={emailRef}
  onChange={checkValidInfo}
/>
<LoginInput
  color={user.pwd ? user.email : undefined}
  placeholder="비밀번호"
  type="password"
  id="pwd"
  ref={pwdRef}
  onChange={checkValidInfo}
/>
<LoginButton
  color={validBtn ? validBtn.toString() : undefined}
  disabled={!validBtn}
  onClick={handleLogin}
>
```
- ⭐️ 조건에 따른 return 값을 삼항연산자를 활용하여 명확하게 명시
- ⭐️ <LoginButton>의 경우 validBtn의 값이 boolean이기 때문에 toString()으로 문자열로 변환

### ⚠️ error  
<img width="1119" alt="error3" src="https://user-images.githubusercontent.com/73277502/177497524-c90fe6c0-1f13-497d-ab64-51e3baa58fc9.png">  
  
- ⬇️기존코드  
```  
  useEffect(() => {
    if (user.email && user.pwd) {
      setValidBtn(true);
    }
  });
```  
  
- ⬇️수정코드  
```  
  useEffect(() => {
    if (user.email && user.pwd) {
      setValidBtn(true);
    }
  },[user.email, user.pwd]);
```  
- ⭐️ useEffect()의 두번째 인자로 배열값을 넣어 언제 렌더링할지를 지정함

### ⚠️ error  
 ``` Error: You cannot render a <Router> inside another <Router>. ```
 - ⭐️ react-router-dom 버전 6 오류로 <BrowserRouter> 태그 삭제로 해결 가능

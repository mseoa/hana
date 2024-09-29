import { useEffect, useRef, useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
const heavyWork = () => {
  console.log("heavyWork start");
  return ["홍길동", "김철수"];
};

function App() {
  const [time, setTime] = useState(1);
  const [names, setNames] = useState(heavyWork);
  const [input, setInput] = useState("");
  const [count, setCount] = useState(1);
  const [nickname, setNickname] = useState("");
  const [showTimer, setShowTimer] = useState(false);
  const [stateCount, setStateCount] = useState(0);

  const countRef = useRef(0);

  let countVar = 0;

  console.log(JSON.stringify(countRef));

  const inputRef = useRef();

  // 맨 처음 화면이 로딩될때 실행
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleClick = () => {
    let newTime;
    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    setNames((prevState) => {
      // console.log("prevState", prevState);
      return [input, ...prevState];
    });
  };

  const handleUpdateCount = () => {
    setCount(count + 1);
  };

  const handleUpdateNickname = (e) => {
    setNickname(e.target.value);
  };

  const IncreaseStateCount = () => {
    setStateCount(stateCount + 1);
  };

  const increaseRefCount = () => {
    countRef.current += 1;
    console.log("ref : ", countRef.current);
  };

  const increaseVarCount = () => {
    countVar += 1;
    console.log("var : ", countVar);
  };

  const login = () => {
    alert(`환영합니다:"${inputRef.current.value}"님`);
  };

  // console.log(input);

  console.log("업데이트");

  // // 렌더링 될때마다 매번 실행 -- 렌더링 이후
  // useEffect(() => {
  //   console.log("렌더링🪄");
  // });

  // // 마운팅 + count가 변화될때마다 실행
  // useEffect(() => {
  //   console.log("💯count 변화");
  // }, [count]);

  // // 마운팅 + nickname이 변화될때마다 실행
  // useEffect(() => {
  //   console.log("👻nickname 변화");
  // }, [nickname]);

  // //마운팅
  // useEffect(() => {
  //   console.log("🚀마운팅");
  // }, []);

  console.log("실행 끝");

  return (
    <>
      <h1>Hook study with 별코딩</h1>
      {/* useState */}
      <div>
        <span>현재 시각: {time}시</span>
        <button onClick={handleClick}>Update</button>
      </div>
      <div>
        <input type="text" value={input} onChange={handleInputChange} />
        <button onClick={handleUpload}>Upload</button>
        {names.map((name, idx) => {
          return <div key={idx}>{name}</div>;
        })}
      </div>
      {/* useEffect */}
      <div>
        <button onClick={handleUpdateCount}>Update</button>
        <span>count: {count}</span>
      </div>
      <div>
        <span>nickname: {nickname}</span>
        <input type="text" value={nickname} onChange={handleUpdateNickname} />
      </div>
      <div>
        {showTimer && <Timer />}
        <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
      </div>
      {/* useRef */}
      <div>
        <p>State: {stateCount}</p>
        <p>Ref: {countRef.current}</p>
        <p>Var: {countVar}</p>
        <button onClick={IncreaseStateCount}>State Count</button>
        <button onClick={increaseRefCount}>Ref Count</button>
        <button onClick={increaseVarCount}>Var Count</button>
      </div>
      {/* useRef */}
      <div>
        <input ref={inputRef} type="text" placeholder="username" />
        <button onClick={login}>로그인</button>
      </div>
    </>
  );
}

export default App;

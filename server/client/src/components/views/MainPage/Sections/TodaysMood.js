import React, { useEffect, useState } from "react";
import Axios from "axios";

function TodaysMood(props) {
  const [Stock, setStock] = useState(0);
  const [Result, setResult] = useState({ point: 0 });

  useEffect(() => {
    Axios.get("/api/arsenal/result").then((response) => {
      if (response.data.success) {
        setResult(response.data);
      } else {
        alert("Failed.");
      }
    });

    Axios.get(
      "https://9wl9vr5c1l.execute-api.ap-northeast-2.amazonaws.com/default/get-spot"
    ).then((response) => {
      if (response.status === 200) {
        setStock(response.data);
      } else {
        alert("Failed.");
      }
    });
  }, []);

  function emoji(point) {
    if (point >= 200) {
      return (
        <span role="img" aria-label="100" title="TO THE MOON">
          🤑
        </span>
      );
    } else if (point >= 100) {
      return (
        <span role="img" aria-label="100" title="LOVELY">
          😍
        </span>
      );
    } else if (point >= 90) {
      return (
        <span role="img" aria-label="90" title="HAPPY">
          😁
        </span>
      );
    } else if (point >= 80) {
      return (
        <span role="img" aria-label="90" title="GOOD">
          🙂
        </span>
      );
    } else if (point >= 70) {
      return (
        <span role="img" aria-label="90" title="NORMAL">
          😐
        </span>
      );
    } else if (point >= 60) {
      return (
        <span role="img" aria-label="90" title="UNHAPPY">
          ☹️
        </span>
      );
    } else if (point >= 50) {
      return (
        <span role="img" aria-label="90" title="F#@!">
          🤬
        </span>
      );
    } else {
      return <span role="img" aria-label="90"></span>;
    }
  }

  return (
    <div>
      <div style={{ fontSize: "2rem" }}>
        <b>오늘의 기분 지수</b>
        <br />
      </div>
      <div style={{ fontSize: "4rem", height: "8rem" }}>
        {emoji(Math.floor(((Stock + Result.point) / 350) * 100))}
      </div>
      <div>
        <progress
          style={{
            width: "100%",
            height: "2rem",
          }}
          value={Math.floor(((Stock + Result.point) / 350) * 100)}
          max="100"
        ></progress>{" "}
        {Math.floor(((Stock + Result.point) / 350) * 100)}%
        <div style={{ textAlign: "left" }}>
          <br />
          <div>
            <b>오늘의 기분 지수</b> 산정 방식은 다음과 같습니다.
            <br />
            a. 보유하고 있는 주식의 실시간 주가
            <br />
            b. 가장 최근의 아스날 경기 결과
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;승 = 100, 무 = -50, 패 = -200
            <br />
            c. 가장 최근의 아스날 경기일로부터 경과일
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;1일 부터 시작한다
            <br />
            <b>오늘의 기분 지수</b> = ((a + b / c) / 350 ) * 100
            <br />
            {Result.result && (
              <div>
                <br />
                Tip : 가장 최근의 경기{" "}
                <b>
                  {Result.result.home.name} VS {Result.result.away.name}
                </b>{" "}
                의
                <br />
                결과는{" "}
                <b>
                  {Result.result.home.score} : {Result.result.away.score}
                </b>{" "}
                입니다.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodaysMood;

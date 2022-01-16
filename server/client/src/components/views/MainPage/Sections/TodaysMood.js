import React, { useEffect, useState } from "react";
import Axios from "axios";

function TodaysMood(props) {
  const [Stock, setStock] = useState(0);
  const [Result, setResult] = useState({ point: 0 });
  const [Weather, setWeather] = useState({ temperature: 0, humidity: 0 });

  useEffect(() => {
    Axios.get("/api/states/arsenal").then((response) => {
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

    Axios.get("/api/states/weather").then((response) => {
      if (response.status === 200) {
        setWeather(response.data);
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
        <span role="img" aria-label="100" title="SUCCESS">
          🥳
        </span>
      );
    } else if (point >= 90) {
      return (
        <span role="img" aria-label="90" title="LOVELY">
          😍
        </span>
      );
    } else if (point >= 80) {
      return (
        <span role="img" aria-label="90" title="HAPPY">
          😁
        </span>
      );
    } else if (point >= 70) {
      return (
        <span role="img" aria-label="90" title="GOOD">
          🙂
        </span>
      );
    } else if (point >= 60) {
      return (
        <span role="img" aria-label="90" title="NO COMMENT">
          😐
        </span>
      );
    } else if (point >= 50) {
      return (
        <span role="img" aria-label="90" title="NOT GOOD">
          😬
        </span>
      );
    } else {
      return (
        <span role="img" aria-label="90" title="F#@!">
          🤬
        </span>
      );
    }
  }

  let TMP = Math.floor(
    Math.floor(((Stock + Result.point) / 350) * 100) -
      (Math.abs(Weather.temperature - 17) + Math.abs(Weather.humidity - 50)) *
        0.3
  );

  return (
    <div>
      <div style={{ fontSize: "2rem" }}>
        <b>오늘의 기분 지수</b>
        <br />
        <div style={{ fontSize: "4rem", height: "6rem" }}>{emoji(TMP)}</div>
        <progress
          style={{
            width: "15rem",
            height: "2rem",
          }}
          value={TMP}
          max="100"
        ></progress>{" "}
        {TMP}%
      </div>
      
      <div>
        
      </div>
      <details style={{ textAlign: "left" }}>
        <br />
        <div>
          <b>오늘의 기분 지수</b> 산정 방식은 다음과 같습니다.
          <br />
          a. 보유하고 있는 주식의 현재 주가 <b>${Stock}</b>
          <br />
          b. 가장 최근의 아스날 경기 결과
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;승 = 100, 무 = -50, 패 = -200
          <br />
          c. 가장 최근의 아스날 경기일로부터 경과일
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;1일 부터 시작한다
          <br />
          d. 현재 날씨 지수
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;(|<b>{Weather.temperature}°</b>(체감 온도) -
          17| + |<b>{Weather.humidity}%</b>(습도) - 50|) * 0.3
          <br />
          <b>오늘의 기분 지수</b> = ((a + b / c) / 350 ) * 100 - d
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
      </details>
    </div>
  );
}

export default TodaysMood;

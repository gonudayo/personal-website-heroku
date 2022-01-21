import React, { useEffect, useState } from "react";
import Axios from "axios";

function TodaysMood(props) {
  const [Stock, setStock] = useState(0);
  const [Result, setResult] = useState({
    point: 0,
    home: {
      score: 0,
    },
    away: {
      score: 0,
    },
  });
  const [Weather, setWeather] = useState({ temperature: 0, humidity: 0 });

  useEffect(() => {
    Axios.get("/api/states/arsenal").then((response) => {
      if (response.data.success) {
        setResult(response.data.results);
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
        <span role="img" aria-label="200" title="TO THE MOON">
          🤑 <br /> "오류겠죠?"
        </span>
      );
    } else if (point >= 100) {
      return (
        <span role="img" aria-label="100" title="SUCCESS">
          🥳 <br /> "성공의 맛"
        </span>
      );
    } else if (point >= 90) {
      return (
        <span role="img" aria-label="90" title="LOVELY">
          😍 <br /> "사랑해요"
        </span>
      );
    } else if (point >= 80) {
      return (
        <span role="img" aria-label="80" title="HAPPY">
          😁 <br /> "행복해요"
        </span>
      );
    } else if (point >= 70) {
      return (
        <span role="img" aria-label="70" title="GOOD">
          🙂 <br /> "좋아요"
        </span>
      );
    } else if (point >= 60) {
      return (
        <span role="img" aria-label="60" title="NOT BAD">
          😐 <br /> "그냥 그래요"
        </span>
      );
    } else if (point >= 50) {
      return (
        <span role="img" aria-label="50" title="SAD">
          😭 <br /> "위로해 줘요"
        </span>
      );
    } else {
      return (
        <span role="img" aria-label="0" title="F#@!">
          🤬 <br /> "건들지 마요"
        </span>
      );
    }
  }

  let TMP = Math.floor(
    Math.floor(
      ((Stock +
        Result.point +
        Math.abs(Result.home.score - Result.away.score) -
        (Math.abs(Weather.temperature - 17) + Math.abs(Weather.humidity - 50)) *
          0.3) /
        350) *
        100
    )
  );

  return (
    <div>
      <div style={{ fontSize: "2rem" }}>
        <b>오늘의 기분 지수</b>
        <br />
        <div style={{ fontSize: "4rem", height: "10.5rem" }}>{emoji(TMP)}</div>
        <progress
          style={{
            width: "15rem",
            height: "2rem",
          }}
          value={TMP}
          max="100"
        ></progress>{" "}
        {TMP}
      </div>
      <details style={{ width: "360px", textAlign: "left" }}>
        <summary>산정 방식</summary>
        <br />
        <div>
          <b>오늘의 기분 지수</b> = ((a + b / c - d) / 350 ) * 100
          <br />
          a. 보유하고 있는 주식의 현재 주가 <b>${Stock}</b>
          <br />
          b. 가장 최근의 아스날 경기 결과
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;(승 = 100, 무 = -50, 패 = -200) + (점수 차*2)
          {Result.day && (
            <span>
              <br />
              &nbsp;&nbsp;&nbsp; {Result.day}{" "}
              <b>
                {Result.home.name} VS {Result.away.name}
              </b>{" "}
              의 결과 :{" "}
              <b>
                {Result.home.score} : {Result.away.score}
              </b>
            </span>
          )}
          <br />
          c. 가장 최근의 아스날 경기일로부터 경과일
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
          {Result.elapsed && <span>{Result.elapsed} 일</span>}
          <br />
          d. 현재 날씨 지수
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;(|<b>{Weather.temperature}°</b>(체감 온도) -
          17| + |<b>{Weather.humidity}%</b>(습도) - 50|) * 0.3
          <br />
          <div>
            <br />
            <b>*</b>각 분야의 전문가와 다수의 논문을 토대로 고안한 지수
            <br />
            는 아니고, 재미를 위해서 만들었습니다. 근데 조금 정확합니다.
          </div>
        </div>
      </details>
    </div>
  );
}

export default TodaysMood;

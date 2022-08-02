import React, { useEffect, useState } from "react";
import Axios from "axios";
import { ResponsiveCalendar } from "@nivo/calendar";

function GrassChart(props) {
  function seoul() {
    const t = new Date();
    t.setHours(t.getHours() + 9);
    return t;
  }
  const today = seoul();
  const year = today.getFullYear();

  const [Grass, setGrass] = useState([]);
  const [Commits, setCommits] = useState([]);
  const [Solves, setSolves] = useState([]);
  const [Year, setYear] = useState(year);
  const [SolveStreak, setSolveStreak] = useState(0);
  const [CommitStreak, setCommitStreak] = useState(0);

  const srtYear = `${Year}-01-01`;
  const endYear = `${Year}-12-31`;

  useEffect(() => {
    Axios.get("/api/charts/study").then((response) => {
      if (response.data.success) {
        setGrass(response.data.arr);
        setCommits(response.data.commits);
        setSolves(response.data.solves);
        setCommitStreak(response.data.maxStreak);
      } else {
        alert("Failed.");
      }
    });
    Axios.get("https://solved.ac/api/v3/user/show?handle=gonudayo").then(
      (response) => {
        if (response.status === 200) {
          setSolveStreak(response.data.maxStreak);
        } else {
          alert("Failed.");
        }
      }
    );
  }, []);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setYear(value * 1);
  };

  const CalTooltip: React.FunctionComponent<CalendarDayData> = (props) => {
    return (
      <div
        style={{
          padding: 12,
          color: "white",
          background: "#222222",
          borderRadius: "5px 5px 5px 5px",
          boxShadow: "3px 3px 3px gray",
        }}
      >
        <strong>
          <span style={{ color: props.color }}>■ </span>
          {props.day} 총합: {props.value}
        </strong>
        <br />
        <strong>
          깃허브 : {props.data.commit} 백준 : {props.data.solve}
        </strong>
      </div>
    );
  };

  return (
    <div style={{ height: 250, paddingBottom: "25vw" }}>
      {Grass && (
        <span className="app">
          <span style={{ fontSize: "2rem" }}>
            <b>
              <a
                href="https://github.com/gonudayo"
                target="_blank"
                rel="noopener noreferrer"
              >
                깃허브
              </a>
            </b>
            ,{" "}
            <b>
              <a
                href="https://www.acmicpc.net/user/gonudayo"
                target="_blank"
                rel="noopener noreferrer"
              >
                백준
              </a>
            </b>
            <b>활동 내역 차트</b>
          </span>
          <div className="stop-dragging">
            <br />
          </div>
          <span>
            <b>{Year}년</b> 총 활동 지수 :{" "}
            {Commits[Year - 2021] + Solves[Year - 2021]} ( 깃허브 커밋 :{" "}
            {Commits[Year - 2021]}, 백준 솔브 : {Solves[Year - 2021]} )
          </span>
          <div>
            <label>
              <input
                type="radio"
                name="letter"
                value={2021}
                checked={Year === 2021}
                onChange={handleChange}
              />
              2021
            </label>
            <label>
              <input
                type="radio"
                name="letter"
                value={2022}
                checked={Year === 2022}
                onChange={handleChange}
              />
              2022
            </label>
          </div>
        </span>
      )}
      {Grass && (
        <div className="stop-dragging" style={{ height: "18vw" }}>
          <ResponsiveCalendar
            data={Grass}
            from={srtYear}
            to={endYear}
            emptyColor="#eeeeee"
            colors={["#A1E4AC", "#78CB94", "#4EB17C", "#007950"]}
            margin={{
              top: 20,
              right: 5,
              bottom: 0,
              left: 5,
            }}
            align="bottom"
            yearSpacing={60}
            monthBorderWidth={1}
            monthBorderColor="#000000"
            monthLegendOffset={10}
            dayBorderWidth={1}
            dayBorderColor="#ffffff"
            tooltip={CalTooltip}
            legends={[
              {
                anchor: "bottom-right",
                direction: "row",
                translateY: 36,
                itemCount: 4,
                itemWidth: 34,
                itemHeight: 36,
                itemDirection: "top-to-bottom",
              },
            ]}
          />
        </div>
      )}
      <div style={{ textAlign: "center" }}>
        <span role="img" aria-label="text" title="">
          🔥 최대 <b>{SolveStreak}</b>일 연속 백준 솔브 🏃 최대{" "}
          <b>{CommitStreak}</b>일 연속 깃허브 커밋 🚨🔥
        </span>
        <div>
          백준{" "}
          <a
            href="https://solved.ac/profile/gonudayo"
            target="_blank"
            rel="noopener noreferrer"
          >
            solved.ac
          </a>{" "}
          기준 : 아침 6시 날짜 변경 / 깃허브 : 밤 12시 날짜 변경
        </div>
      </div>
    </div>
  );
}

export default GrassChart;

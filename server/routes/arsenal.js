const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");

const Month = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

// 최근 아스날 경기 정보를 스크래핑하는 API
router.get("/result", (req, res) => {
  const getKRW = async () => {
    try {
      return await axios.get("https://www.skysports.com/arsenal-results");
    } catch (error) {}
  };

  getKRW().then((html) => {
    const $ = cheerio.load(html.data);
    let parentTagMatch = $("div.fixres__body div.fixres__item ");
    let parentTagDate = $("div.fixres__body h4.fixres__header2");
    let parentTagYear = $("div.fixres__body h3.fixres__header1");
    let homeTeam = [];
    let awayTeam = [];
    let homeScore = [];
    let awayScore = [];
    let mDate = [];
    let mYear = [];

    // 경기 결과 : 팀이름, 점수
    parentTagMatch.each(function (i, elem) {
      if (i === 1) return false;
      homeScore.push(
        $(this).find("span.matches__teamscores span:nth-child(1)").text().trim()
      );
      awayScore.push(
        $(this).find("span.matches__teamscores span:nth-child(2)").text().trim()
      );
      homeTeam.push(
        $(this)
          .find(
            "span.matches__item-col.matches__participant.matches__participant--side1 span span"
          )
          .text()
      );
      awayTeam.push(
        $(this)
          .find(
            "span.matches__item-col.matches__participant.matches__participant--side2 span span"
          )
          .text()
      );
    });

    // 경기 월 일
    parentTagDate.each(function (i, elem) {
      if (i === 1) return false;
      let dateString = $(this).text();
      let arr = dateString.split(" ");
      arr[1] = arr[1].substring(0, arr[1].length - 2);
      mDate.push({ day: arr[1], month: arr[2] });
    });

    // 경기 년도
    parentTagYear.each(function (i, elem) {
      if (i === 1) return false;
      let dateString = $(this).text();
      let arr = dateString.split(" ");
      mYear.push(arr[1]);
    });

    const matchDay =
      mYear[0] + "/" + Month[mDate[0].month] + "/" + mDate[0].day;

    // 영국 기준 현지시각과 경기당일 과의 일 수 차이
    var btMs = new Date().getTime() - new Date(matchDay).getTime();
    var btDay = btMs / (1000 * 60 * 60 * 24);

    let score = "";
    if (homeTeam[0] === "Arsenal") {
      if (homeScore[0] > awayScore[0]) score = 100;
      else if (homeScore[0] === awayScore[0]) score = -50;
      else score = -200;
    } else {
      if (homeScore[0] > awayScore[0]) score = -200;
      else if (homeScore[0] === awayScore[0]) score = -50;
      else score = 100;
    }
    const result = {
      day: matchDay,
      home: {
        name: homeTeam[0],
        score: homeScore[0],
      },
      away: {
        name: awayTeam[0],
        score: awayScore[0],
      },
    };
    return res
      .status(200)
      .json({ success: true, result: result, point: score / btDay });
  });
});

module.exports = router;

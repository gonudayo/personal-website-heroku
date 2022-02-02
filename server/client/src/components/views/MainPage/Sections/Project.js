import React from "react";
import RepoCard from "react-repo-card";
import { isMobile } from "react-device-detect";

function Project(props) {
  if (isMobile) {
    return (
      <div>
        <div style={{ fontSize: "2rem", paddingBottom: 10 }}>
          <b>Projects</b>
        </div>
        <div style={{ width: "350px", marginBottom: 100, marginTop: 50 }}>
          <div style={{ fontSize: "1.6rem" }}>
            {" "}
            2021 개인 웹사이트{" "}
            <div style={{ fontSize: "1rem" }}>
              *주요 기술 스택 : node.js, React, MongoDB, Express.js, Python, AWS
              Lambda, DynamoDB, Amazon EventBridge, Heroku, Netflify
            </div>
          </div>
          <br />
          <div style={{ fontSize: "1rem" }}>
            Heroku 배포{" "}
            <a
              href="https://gunwoo.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              (현재 버전)
            </a>
          </div>
          <br />
          <div style={{ textAlign: "left" }}>
            <RepoCard username="gonudayo" repository="PersonalWebsite-Heroku" />
          </div>

          <br />
          <div style={{ textAlign: "left" }}>
            <RepoCard username="gonudayo" repository="PersonalWebsite-AWS" />
          </div>

          <br />
          <div style={{ fontSize: "1rem" }}>
            Netlify 배포{" "}
            <a
              href="https://workhard.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              (구버전)
            </a>
          </div>
          <br />
          <div style={{ textAlign: "left" }}>
            <RepoCard
              username="gonudayo"
              repository="PersonalWebsite-Netlify"
            />
          </div>
        </div>

        <div style={{ width: "350px", paddingBottom: 100 }}>
          <div style={{ fontSize: "1.6rem" }}>
            2021 군장병 공개SW 온라인 해커톤 : 위드 밀리터리
            <div style={{ fontSize: "1rem" }}>
              *주요 기술 스택 : node.js, React, MongoDB, Express.js, Amazon EC2,
              Nginx, Slack, git, Postman, Figma
            </div>
          </div>
          <br />
          <div style={{ textAlign: "left" }}>
            <RepoCard
              username="osamhack2021"
              repository="Web_With_Military_temp"
            />
          </div>
        </div>

        <div style={{ width: "350px", paddingBottom: 150 }}>
          <div style={{ fontSize: "1.6rem" }}>
            크롬 확장프로그램 : 유튜브 그만 봐
            <div style={{ fontSize: "1rem" }}>
              *주요 기술 스택 : JavaScript, html, css
            </div>
          </div>
          <br />
          <div style={{ fontSize: "1rem" }}>
            <a
              href="https://chrome.google.com/webstore/detail/stop-watching-youtube/fapfmppbpbgkgbiaeiemppdapkgngajj"
              target="_blank"
              rel="noopener noreferrer"
            >
              chrome 웹스토어 바로가기
            </a>
          </div>
          <br />
          <div style={{ textAlign: "left" }}>
            <RepoCard username="gonudayo" repository="Stop-watching-YouTube" />
          </div>
        </div>
        <div style={{ paddingBottom: 50 }}>
          <a href="/#" title="맨 위로">
            Back to top
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ fontSize: "2rem", paddingTop: 200, paddingBottom: 100 }}>
        <div style={{ fontSize: "2rem", paddingBottom: 100 }}>
          <b>Projects</b>
        </div>
        <div
          style={{
            width: "405px",
            marginLeft: 50,
            marginRight: 50,
            float: "left",
            mariginBottom: 100,
          }}
        >
          <div style={{ fontSize: "1.6rem" }}>
            {" "}
            개인 웹사이트 프로젝트{" "}
            <div style={{ fontSize: "1rem" }}>
              *주요 기술 스택 : node.js, React, MongoDB, Express.js, Python, AWS
              Lambda, DynamoDB, Amazon EventBridge, Heroku, Netflify
            </div>
          </div>
          <br />
          <div style={{ fontSize: "1rem" }}>
            Heroku 배포{" "}
            <a
              href="https://gunwoo.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              (현재 버전)
            </a>
          </div>
          <br />
          <div style={{ textAlign: "left" }}>
            <RepoCard username="gonudayo" repository="PersonalWebsite-Heroku" />
          </div>

          <br />
          <div style={{ textAlign: "left" }}>
            <RepoCard username="gonudayo" repository="PersonalWebsite-AWS" />
          </div>

          <br />
          <div style={{ fontSize: "1rem" }}>
            Netlify 배포{" "}
            <a
              href="https://workhard.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              (구버전)
            </a>
          </div>
          <br />
          <div style={{ textAlign: "left" }}>
            <RepoCard
              username="gonudayo"
              repository="PersonalWebsite-Netlify"
            />
          </div>
        </div>

        <div
          style={{
            width: "405px",
            marginRight: 50,
            float: "left",
            marginBottom: 100,
          }}
        >
          <div style={{ fontSize: "1.6rem" }}>
            군장병 공개SW 온라인 해커톤 :<br />
            위드 밀리터리
            <div style={{ fontSize: "1rem" }}>
              *주요 기술 스택 : node.js, React, MongoDB, Express.js, Amazon EC2,
              Nginx, Slack, git, Postman, Figma
            </div>
          </div>
          <br />
          <div style={{ textAlign: "left" }}>
            <RepoCard
              username="osamhack2021"
              repository="Web_With_Military_temp"
            />
          </div>
        </div>

        <div style={{ width: "405px", marginRight: 50, float: "left" }}>
          <div style={{ fontSize: "1.6rem" }}>
            크롬 확장프로그램 :<br />
            유튜브 그만 봐!
            <div style={{ fontSize: "1rem" }}>
              *주요 기술 스택 : JavaScript, html, css
            </div>
          </div>
          <br />

          <div style={{ fontSize: "1rem" }}>
            <a
              href="https://chrome.google.com/webstore/detail/stop-watching-youtube/fapfmppbpbgkgbiaeiemppdapkgngajj"
              target="_blank"
              rel="noopener noreferrer"
            >
              chrome 웹스토어 바로가기
            </a>
          </div>
          <br />
          <div style={{ textAlign: "left" }}>
            <RepoCard username="gonudayo" repository="Stop-watching-YouTube" />
          </div>
        </div>
      </div>
    );
  }
}
export default Project;

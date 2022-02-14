import React from "react";

function AboutMe(props) {
  return (
    <div>
      <div className="stop-dragging">
        <div>
          <img
            style={{ width: "300px", height: "auto" }}
            src="/gunwoo.JPG"
            alt="2020김건우"
          ></img>
        </div>
        <br />
      </div>

      <div style={{ fontSize: "2rem" }}>
        <p>
          "반갑습니다. 신입 백엔드 개발자 <b>김건우</b> 입니다."
        </p>
      </div>
      <div className="stop-dragging">
        <br />
      </div>
      <h2>
        <span role="img" aria-label="call">
          🤙
        </span>{" "}
        Contact me
      </h2>
      <div className="stop-dragging">
        <div>
          <p>
            <a
              href="mailto:kimgunwoo@yahoo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="logo"
                alt="mail"
                src="https://img.shields.io/badge/kimgunwoo@yahoo.com-6001D2?style=flat-square&logo=yahoo&logoColor=white"
              />
            </a>
            <br />
            <a
              href="https://github.com/gonudayo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="logo"
                alt="github"
                src="https://img.shields.io/badge/github-333?style=flat-square&logo=GitHub&logoColor=white"
              />
            </a>{" "}
            <a
              href="https://velog.io/@gonudayo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="logo"
                alt="velog"
                src="https://img.shields.io/badge/velog-20c997?style=flat-square&logo=Vimeo&logoColor=white"
              />
            </a>{" "}
            <a href="https://open.spotify.com/user/tid50r737huqem85120vai83d">
              <img
                className="logo"
                alt="spotify"
                src="https://img.shields.io/badge/Spotify-000000?style=flat-square&logo=spotify&logoColor=1DB954"
              />
            </a>
          </p>
        </div>
        <br />
      </div>

      <h2>
        <span role="img" aria-label="skill">
          💪
        </span>{" "}
        Skills
      </h2>
      <div className="stop-dragging">
        <div>
          <p>
            <img
              className="logo"
              alt="node"
              src="https://img.shields.io/badge/node.js-339933?style=flat-square&logo=node.js&logoColor=white"
            />{" "}
            <img
              className="logo"
              alt="javascript"
              src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"
            />{" "}
            <img
              className="logo"
              alt="express"
              src="https://img.shields.io/badge/Express.js-cccccc?style=flat-square&logo=express&logoColor=black"
            />{" "}
            <img
              className="logo"
              alt="cpp"
              src="https://img.shields.io/badge/C++-00599C?style=flat-square&logo=cplusplus&logoColor=white"
            />
            <br />
            <img
              className="logo"
              alt="amazonaws"
              src="https://img.shields.io/badge/Amazon AWS-232F3E?style=flat-square&logo=amazonaws&logoColor=white"
            />{" "}
            <img
              className="logo"
              alt="mongodb"
              src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white"
            />{" "}
            <img
              className="logo"
              alt="postman"
              src="https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white"
            />{" "}
            <img
              className="logo"
              alt="ubuntu"
              src="https://img.shields.io/badge/Ubuntu-E95420?style=flat-square&logo=ubuntu&logoColor=white"
            />
            <br />
          </p>
        </div>
        <br />
      </div>
    </div>
  );
}
export default AboutMe;

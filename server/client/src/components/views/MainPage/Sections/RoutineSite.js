import React from 'react';

function UsefulSite(props) {
	return (
		<div>
			<div>
			<a
				href="https://accounts.spotify.com/ko/login?continue=https:%2F%2Fopen.spotify.com%2F"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src="spotify.png" height="75" width="75" alt="spotify" />
			</a>
			<a href="https://ide.goorm.io/my/dashboard" target="_blank" rel="noopener noreferrer">
				<img src="goorm.png" height="75" width="75" alt="goorm" />
			</a>
			<a href="https://github.com/login" target="_blank" rel="noopener noreferrer">
				<img src="github.png" height="75" width="75" alt="github" />
			</a>
			<a href="https://www.acmicpc.net/login" target="_blank" rel="noopener noreferrer">
				<img src="baekjoon.png" height="75" width="75" alt="baekjoon" />
			</a>
			<a
				href="https://programmers.co.kr/users/login"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src="programmers.png" height="75" width="75" alt="programmers" />
			</a>
		</div>
			<br />
			&nbsp;&nbsp;
			<a href="https://ideal-sukiyaki.slack.com/" target="_blank" rel="noopener noreferrer">
				Slack
			</a>
			&nbsp;&nbsp;
			<a
				href="https://account.mongodb.com/account/login"
				target="_blank"
				rel="noopener noreferrer"
			>
				mongoDB
			</a>
			&nbsp;&nbsp;
			<a
				href="https://dl.pstmn.io/download/latest/win64"
				target="_blank"
				rel="noopener noreferrer"
			>
				Postman
			</a>
			&nbsp;&nbsp;
			<a
				href="https://chrome.google.com/webstore/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg"
				target="_blank"
				rel="noopener noreferrer"
			>
				Adguard
			</a>
			&nbsp;&nbsp;
			<a
				href="https://ap-northeast-2.console.aws.amazon.com/console/home?region=ap-northeast-2#"
				target="_blank"
				rel="noopener noreferrer"
			>
				AWS
			</a>
			&nbsp;&nbsp;
		</div>
	);
}
export default UsefulSite;
import React from 'react';

// 만 나이 계산
function seoul() {
	const temp = new Date();
	temp.setHours(temp.getHours() + 9);
	return temp;
}
const today = seoul();
const year = today.getFullYear();
const month = `0${today.getMonth() + 1}`.slice(-2);
const day = `0${today.getDate()}`.slice(-2);
let age = year - 2001;
if (month <= 1 && day <= 19) age -= 1;

function AboutMe(props) {
	return (
		<div>
			<div style={{ fontSize: '2rem' }}>
				<img
					style={{ width: '300px', height: 'auto' }}
					src="/gunwoo.JPG"
					alt="2020김건우"
				></img>
			</div>
			<br />
			<div style={{ fontSize: '2rem' }}>
				<p>
					"반갑습니다. 만 {age}세 초신성 개발자 <b>김건우</b> 입니다."
				</p>
			</div>
			<br />
			<h2><span role="img" aria-label="call">🤙</span> Contact me</h2>
			<p>
				<a href="mailto:kimgunwoo@yahoo.com" target="_blank" rel="noopener noreferrer">
					<img alt="mail" src="https://img.shields.io/badge/kimgunwoo@yahoo.com-6001D2?style=flat-square&logo=yahoo&logoColor=white" />
				</a>
				<br />
				<a href="https://github.com/gonudayo" target="_blank" rel="noopener noreferrer">
					<img alt="github" src="https://img.shields.io/badge/github-181717?style=flat-square&logo=GitHub&logoColor=white" />
				</a>
				{' '}
				<a href="https://velog.io/@gonudayo/" target="_blank" rel="noopener noreferrer">
					<img alt="velog" src="https://img.shields.io/badge/velog-20c997?style=flat-square&logo=Vimeo&logoColor=white" />
				</a>
				{' '}
				<a href="https://blog.naver.com/kgw553" target="_blank" rel="noopener noreferrer">
					<img alt="naver" src="https://img.shields.io/badge/blog-03C75A?style=flat-square&logo=naver&logoColor=white" />
				</a>
			</p>
			<h2><span role="img" aria-label="skill" >💪</span> Skills</h2>
			<p>
				<img alt="node" src="https://img.shields.io/badge/node.js-339933?style=flat-square&logo=node.js&logoColor=white" />{' '}
				<img alt="java" src="https://img.shields.io/badge/Java-007396?style=flat-square&logo=java&logoColor=white" />{' '}
				<img alt="cpp" src="https://img.shields.io/badge/C++-00599C?style=flat-square&logo=cplusplus&logoColor=white" />{' '}
				<img alt="python" src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" />
				<br />
				<img alt="amazonaws" src="https://img.shields.io/badge/Amazon AWS-232F3E?style=flat-square&logo=amazonaws&logoColor=white" />{' '}
				<img alt="mongodb" src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" />{' '}
				<img alt="postman" src="https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white" />
			</p>
		</div>
	);
}
export default AboutMe;
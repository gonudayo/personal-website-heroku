import React from 'react';
import GrassChart from './Sections/GrassChart';
import StockChart from './Sections/StockChart';
import RoutineSite from './Sections/RoutineSite';
import AboutMe from './Sections/AboutMe';

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

function MainPage() {
	
	return (
		<div>
			<div className="app" style={{ fontSize: '2rem' }}><img style={{ width: '300px', height: 'auto' }} src='/gunwoo.JPG' alt='2020김건우' ></img></div>
			<br />
			<div className="app" style={{ fontSize: '2rem' }}><p>"반갑습니다. 만 {age}세 초신성 개발자 <b>김건우</b> 입니다."</p></div>
			<br />
			<div className="app">
			<AboutMe />
			</div>
			<br /><br /><br /><br /><br />
			<GrassChart />
			<div className="app">
			<StockChart />
			<br /><br /><br /><br /><br />
			<div style={{ fontSize: '1.5rem' }}>루틴</div>
			<br />
			<RoutineSite />
			</div>
		</div>
	);
}

export default MainPage;
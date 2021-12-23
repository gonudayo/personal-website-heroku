import React, {useEffect, useState } from 'react';
import Axios from 'axios';
import GrassChart from './Sections/GrassChart';
import StockChart from './Sections/StockChart';
import UsefulSite from './Sections/UsefulSite';
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
	const [Grass, setGrass] = useState([]);
	const [Commits, setCommits] = useState(0);
	const [Solves, setSolves] = useState(0);
	const [Stock, setStock] = useState([]);
	const [Asset, setAsset] = useState(0);
	
	useEffect(() => {
		Axios.get('/api/charts/study').then((response) => {
			if (response.data.success) {
				setGrass(response.data.arr);
				setCommits(response.data.commits);
				setSolves(response.data.solves);
			} else {
				alert('Failed.');
			}
		});
		
		Axios.get('/api/charts/stock').then((response) => {
			if (response.data.success) {
				setStock(response.data.arr);
				setAsset(response.data.asset);
			} else {
				alert('Failed.');
			}
		});
	}, []);
	
	return (
		<div>
			<div className="app" style={{ fontSize: '2rem' }}><img style={{ width: '300px', height: 'auto' }} src='/gunwoo.JPG' alt='김건우 초상화' ></img></div>
			<br />
			<div className="app" style={{ fontSize: '2rem' }}><p>"반갑습니다. 만 {age}세 초신성 개발자 <b>김건우</b> 입니다."</p></div>
			<br />
			<div className="app">
			<AboutMe />
			</div>
			<br /><br /><br /><br /><br />
			<GrassChart data={Grass} commits={Commits} solves={Solves} />
			<br /><br /><br /><br /><br />
			<div className="app">
			<StockChart data={Stock} asset={Asset} />
			<br /><br /><br /><br /><br />
			<div style={{ fontSize: '1.5rem' }}>루틴</div>
			<br />
			<UsefulSite />
			<br />
			<RoutineSite />
			</div>
		</div>
	);
}

export default MainPage;
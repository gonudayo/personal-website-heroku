import React, {useEffect, useState } from 'react';
import Axios from 'axios';
import GrassChart from './Sections/GrassChart';
import StockChart from './Sections/StockChart';
import UsefulSite from './Sections/UsefulSite';
import RoutineSite from './Sections/RoutineSite';

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
			<div className="app" style={{ fontSize: '2rem' }}><p>"반갑습니다. 만 21세 초신성 개발자 <b>김건우</b> 입니다."</p></div>
			<br /><br /><br /><br />
			<GrassChart data={Grass} commits={Commits} solves={Solves} />
			<div className="app">
			<br />
			<StockChart data={Stock} asset={Asset} />
			<br />
			<div style={{ fontSize: '1.5rem' }}>루틴 및 유용한 사이트</div>
			<br />
			<UsefulSite />
			<br />
			<RoutineSite />
			</div>
		</div>
	);
}

export default MainPage;
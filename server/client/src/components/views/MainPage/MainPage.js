import React, {useEffect, useState } from 'react';
import Axios from 'axios';
import GrassChart from './Sections/GrassChart';
import StockChart from './Sections/StockChart';

function MainPage() {
	const [Grass, setGrass] = useState([]);
	const [Commits, setCommits] = useState(0);
	const [Solves, setSolves] = useState(0);
	const [Stock, setStock] = useState([]);
	
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
			} else {
				alert('Failed.');
			}
		});
	}, []);
	
	return (
		<div>
			<div className="app" style={{ fontSize: '2rem' }}><img style={{ width: '300px', height: 'auto' }} src='/gunwoo.JPG' alt='김건우 초상화' ></img></div>
			<br />
			<div className="app" style={{ fontSize: '2rem' }}>"반갑습니다. 만 21세 초신성 개발자 입니다."</div>
			<br />
			<GrassChart data={Grass} commits={Commits} solves={Solves} />
			<div className="app">
			<br />
			<StockChart data={Stock} />
			<div style={{ fontSize: '2rem' }}>내게 유용한 기능</div>
			<br />
			<div style={{ fontSize: '2rem' }}>관련 사이트</div>
			<br />
			</div>
		</div>
	);
}

export default MainPage;
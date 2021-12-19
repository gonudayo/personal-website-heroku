import React, {useEffect, useState } from 'react';
import Axios from 'axios';
import GrassChart from './Sections/GrassChart';

function MainPage() {
	const [Grass, setGrass] = useState([]);
	const [Commits, setCommits] = useState(0);
	const [Solves, setSolves] = useState(0);
	
	useEffect(() => {
		Axios.get('/api/charts/data').then((response) => {
			if (response.data.success) {
				setGrass(response.data.arr);
				setCommits(response.data.commits);
				setSolves(response.data.solves);
			} else {
				alert('Failed.');
			}
		});
	}, []);
	
	return (
		<div>
			<div className="app"style={{ fontSize: '2rem' }}>(김건우 초상화)</div>
			<br />
			<div className="app" style={{ fontSize: '2rem' }}>안녕하세요. 22살 초신성 개발자 입니다.</div>
			<br />
			<GrassChart data={Grass} commits={Commits} solves={Solves} />
			<div className="app">
			<br />
			<div style={{ fontSize: '2rem' }}>내게 유용한 기능</div>
			<br />
			<div style={{ fontSize: '2rem' }}>관련 사이트</div>
			<br />
			</div>
		</div>
	);
}

export default MainPage;
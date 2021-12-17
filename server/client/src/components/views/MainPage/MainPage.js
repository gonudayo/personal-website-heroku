import React, {useEffect, useState } from 'react';
import Axios from 'axios';
import GrassChart from './Sections/GrassChart';

function MainPage() {
	const [Grass, setGrass] = useState([]);
	
	useEffect(() => {
		Axios.get('/api/charts/github').then((response) => {
			if (response.data.success) {
				setGrass(response.data.arr);
			} else {
				alert('Failed.');
			}
		});
		
		Axios.get('/api/charts/baekjoon').then((response) => {
			if (response.data.success) {
				setGrass(response.data.arr);
			} else {
				alert('Failed.');
			}
		});
	}, []);
	
	return (
		<div >
			<span style={{ fontSize: '2rem' }}>김건우</span>
			<br />
			<span style={{ fontSize: '2rem' }}>소개</span>
			<br />
			<GrassChart data={Grass} />
			<br />
			<span style={{ fontSize: '2rem' }}>링크-위젯들</span>
			<br />
			<span style={{ fontSize: '2rem' }}>...</span>
			<br />
		</div>
	);
}

export default MainPage;
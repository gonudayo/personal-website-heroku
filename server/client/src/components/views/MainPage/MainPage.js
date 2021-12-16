import React, {useEffect, useState } from 'react';
import Axios from 'axios';
import GrassChart from './Sections/GrassChart';

function MainPage() {
	const [Grass, setGrass] = useState([]);
	
	useEffect(() => {
		Axios.get('/api/test/').then((response) => {
			if (response.data.success) {
				setGrass(response.data.arr);
			} else {
				console.log(response.data.success)
				alert('Failed.');
			}
		});
	}, []);
	
	return (
		<div className="app">
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
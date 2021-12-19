import React, {useEffect, useState } from 'react';
import Axios from 'axios';
import GrassChart from './Sections/GrassChart';

function MainPage() {
	const [Grass, setGrass] = useState([]);
	
	useEffect(() => {
		Axios.get('/api/charts/data').then((response) => {
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
			<GrassChart data={Grass} />
			<span style={{ fontSize: '2rem' }}>링크-위젯들</span>
			<br />
			<span style={{ fontSize: '2rem' }}>...</span>
			<br />
		</div>
	);
}

export default MainPage;
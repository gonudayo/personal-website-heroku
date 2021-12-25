import React, {useEffect, useState } from 'react';
import Axios from 'axios';
import { ResponsiveCalendar } from '@nivo/calendar';

function GrassChart(props) {
	const [Grass, setGrass] = useState([]);
	const [Commits, setCommits] = useState(0);
	const [Solves, setSolves] = useState(0);
	
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
	}, []);
	
	const CalTooltip: React.FunctionComponent<CalendarDayData> = (props) => {
		return (
			<div
				style={{
					padding: 12,
					color: 'white',
					background: '#222222',
					borderRadius: '5px 5px 5px 5px',
					boxShadow: '3px 3px 3px gray',
				}}
			>
				<strong>
					<span style={{ color: props.color }}>■ </span>
					{props.day} 총합: {props.value}
				</strong>
				<br />
				<strong>
					깃허브 : {Grass.commit} 백준 : {Grass.solve}
				</strong>
			</div>
		);
	};

	return (
		<div style={{ height: 250, marginTop: 100 }}>
			{Grass && (
				<span className="app">
					<span style={{ fontSize: '2rem' }}>
						<b>
						<a href="https://github.com/gonudayo" target="_blank" rel="noopener noreferrer">
							깃허브
						</a>
						</b>
						,{' '}
						<b>
						<a href="https://www.acmicpc.net/user/gonudayo" target="_blank" rel="noopener noreferrer">
							백준
						</a>
						</b>
						활동 내역 차트
					</span>
					<span>
						{' '}
						1년간 총 활동 지수 : {Commits + Solves} ( 깃허브 커밋 수 :{' '}
						{Commits}, 백준 솔브 수 : {Solves} )
					</span>
				</span>
			)}
			{Grass && (
				<ResponsiveCalendar
					data={Grass}
					from="2021-01-01"
					to="2021-12-31"
					emptyColor="#eeeeee"
					colors={['#99FF99', '#32CD32', '#008000', '#006400']}
					margin={{
						top: 50,
						right: 5,
						bottom: 0,
						left: 5,
					}}
					align="top"
					yearSpacing={60}
					monthBorderWidth={1}
					monthBorderColor="#000000"
					monthLegendOffset={10}
					dayBorderWidth={1}
					dayBorderColor="#ffffff"
					tooltip={CalTooltip}
					legends={[
						{
							anchor: 'bottom-right',
							direction: 'row',
							translateY: 36,
							itemCount: 4,
							itemWidth: 34,
							itemHeight: 36,
							itemDirection: 'top-to-bottom',
						},
					]}
				/>
			)}
		</div>
	);
}

export default GrassChart;
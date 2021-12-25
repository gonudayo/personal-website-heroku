import React, { useEffect, useState } from 'react';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';
import Axios from 'axios';

function StockChart(props) {
	const [Stock, setStock] = useState([]);
	const [Asset, setAsset] = useState(0);

	useEffect(() => {
		Axios.get('/api/charts/stock').then((response) => {
			if (response.data.success) {
				setStock(response.data.arr);
				setAsset(response.data.asset);
			} else {
				alert('Failed.');
			}
		});

		Axios.get(
			'https://9wl9vr5c1l.execute-api.ap-northeast-2.amazonaws.com/default/Crawling-Example'
		).then((response) => {
			function est() {
				const temp = new Date();
				temp.setHours(temp.getHours() - 5);
				return temp;
			}
			const today = est();
			const day = today.getDay();
			const hour = today.getHours();
			const minutes = today.getMinutes();
			if (response.status === 200) {
				if (day < 5 && (hour > 9 || (hour === 9 && minutes >= 30))) {
					setStock((Stock) => [...Stock, { day: 'now', value: response.data }]);
				}
			} else {
				alert('Failed.');
			}
		});
	}, []);

	return (
		<div style={{ position: 'relative', width: '80%', paddingTop: '10%' }}>
			{Stock && (
				<span className="app">
					<span style={{ fontSize: '2rem' }}>
						<b>
							<a
								href="https://open.spotify.com/user/tid50r737huqem85120vai83d"
								target="_blank"
								rel="noopener noreferrer"
							>
								스포티파이
							</a>
						</b>
					</span>
					<span> 나의 시가총액 (전재산) : {Asset.toFixed(0)} 원 </span>
				</span>
			)}
			<ResponsiveContainer width="100%" height={400}>
				<LineChart
					data={Stock}
					margin={{
						top: 40,
						right: 40,
						left: 0,
						bottom: 120,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="day" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line
						name="Spotify"
						type="monotone"
						dataKey="value"
						stroke="#1DB954"
						activeDot={{ r: 8 }}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}

export default StockChart;
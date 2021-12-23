import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function StockChart(props) {
	return (
		<div style={{ height: 500 }}>
			{props.data && (
				<span className="app">
					<span style={{ fontSize: '2rem' }}>
						<b>
							<a href="https://open.spotify.com/user/tid50r737huqem85120vai83d" target="_blank" rel="noopener noreferrer">
								스포티파이
							</a>
						</b>
					</span>
					<span> 나의 시가총액 (전재산) : {props.asset.toFixed(0)} 원 </span>
				</span>
			)}
			<LineChart
				width={1000}
				height={500}
				data={props.data}
				margin={{
					top: 40,
					right: 40,
					left: 40,
					bottom: 40,
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
		</div>
	);
}

export default StockChart;
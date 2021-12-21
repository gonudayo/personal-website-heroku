import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


function StockChart(props) {
	return (
		<LineChart
      width={1000}
      height={500}
      data={props.data}
      margin={{
        top: 40,
        right: 40,
        left: 40,
        bottom: 40
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
	);
}

export default StockChart;
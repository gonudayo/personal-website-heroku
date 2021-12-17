import React from 'react';
import { ResponsiveCalendar } from '@nivo/calendar';

function GrassChart(props) {
	const CustomTooltip = data => {
   if (data.value === undefined) return null    
		return (
       <span style={{ color: data.color, backgroundColor: 'black', padding: '10px' }}>
            {data.day} 총합 : {data.value}<br />
			깃허브 : {data.github}<br />
			백준 : {data.baekjoon}
        </span>
    )
}
	
	return (
		<div className="" style={{ height: 1000 }}>
			{props.data && (
				<ResponsiveCalendar
					data={props.data}
					from="2021-01-01"
					to="2021-12-31"
					emptyColor="#eeeeee"
					colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
					margin={{
						top: 100,
						right: 30,
						bottom: 60,
						left: 30,
					}}
					yearSpacing={60}
					monthBorderColor="#ffffff"
					monthLegendOffset={10}
					dayBorderWidth={2}
					dayBorderColor="#ffffff"
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
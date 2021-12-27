import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { isMobile } from 'react-device-detect';
import GrassChart from './Sections/GrassChart';
import StockChart from './Sections/StockChart';
import AboutMe from './Sections/AboutMe';
import Project from './Sections/Project';

function MainPage() {
	if (isMobile) {
		return (
			<div>
				<div className="section" style={{ marginBottom: 150 }}>
					<div className="app">
						<AboutMe />
					</div>
				</div>
				<div className="section" >
					<GrassChart />
					<div className="app">
						<StockChart />
					</div>
				</div>
				<div className="section">
					<div className="app">
						<Project />
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<ReactFullpage
				scrollOverflow={true}
				navigation
				sectionsColor={['white', 'white', 'white']}
				render={({ state, fullpageApi }) => {
					return (
						<div>
							<div className="section">
								<div className="app">
									<AboutMe />
								</div>
							</div>
							<div className="section">
								<GrassChart />
								<div className="app">
									<StockChart />
								</div>
							</div>
							<div className="section">
								<div className="app">
						<Project />
					</div>
							</div>
						</div>
					);
				}}
			/>
		);
	}
}

export default MainPage;
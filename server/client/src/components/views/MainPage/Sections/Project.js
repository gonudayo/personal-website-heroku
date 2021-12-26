import React from 'react';
import RepoCard from 'react-repo-card';
import { isMobile } from 'react-device-detect';

function Project(props) {
	if (isMobile) {
		return (
			<div>
				<div style={{ width: '350px', marginBottom: 100, marginTop: 200}}>
					<div style={{ fontSize: '2rem' }}> 2021 개인 웹사이트 </div>
					<br />
					<div style={{ fontSize: '1rem' }}>
						{' '}
						Heroku 배포{' '}
						<a
							href="https://gunwoo.herokuapp.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							(Current Site)
						</a>{' '}
					</div>
					<br />
					<RepoCard username="gonudayo" repository="PersonalWebsite-Heroku" />
					<br />
					<RepoCard username="gonudayo" repository="PersonalWebsite-AWS" />
					<br />
					<div style={{ fontSize: '1rem' }}>
						{' '}
						Netlify 배포{' '}
						<a
							href="https://workhard.netlify.app"
							target="_blank"
							rel="noopener noreferrer"
						>
							(구버전)
						</a>{' '}
					</div>
					<br />
					<RepoCard username="gonudayo" repository="PersonalWebsite-Netlify" />
				</div>

				<div style={{ width: '350px', paddingBottom: 150 }}>
					<div style={{ fontSize: '2rem' }}>
						{' '}
						2021 군장병 공개SW 온라인 해커톤 : 위드 밀리터리
					</div>
					<br />
					<RepoCard username="osamhack2021" repository="Web_With_Military_temp" />
				</div>
				<div>
					<a style={{ display: 'scroll', paddingBottom: 50}} href="#" title="맨 위로">Back to top</a>
				</div>
			</div>
		);
	} else {
		return (
			<div>
				<div style={{ width: '405px', marginLeft: 50, marginRight: 50, float: 'left' }}>
					<div style={{ fontSize: '2rem' }}> 개인 웹사이트 프로젝트 </div>
					<br />
					<div style={{ fontSize: '1rem' }}>
						{' '}
						Heroku 배포{' '}
						<a
							href="https://gunwoo.herokuapp.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							(Current Site)
						</a>{' '}
					</div>
					<br />
					<RepoCard username="gonudayo" repository="PersonalWebsite-Heroku" />
					<br />
					<RepoCard username="gonudayo" repository="PersonalWebsite-AWS" />
					<br />
					<div style={{ fontSize: '1rem' }}>
						{' '}
						Netlify 배포{' '}
						<a
							href="https://workhard.netlify.app"
							target="_blank"
							rel="noopener noreferrer"
						>
							(구버전)
						</a>{' '}
					</div>
					<br />
					<RepoCard username="gonudayo" repository="PersonalWebsite-Netlify" />
				</div>

				<div style={{ width: '405px', marginRight: 50, float: 'left' }}>
					<div style={{ fontSize: '2rem' }}>
						{' '}
						2021 군장병 공개SW 온라인 해커톤 : 위드 밀리터리
					</div>
					<br />
					<RepoCard username="osamhack2021" repository="Web_With_Military_temp" />
				</div>
			</div>
		);
	}
}
export default Project;
import React from 'react';
import RepoCard from 'react-repo-card';
import { isMobile } from 'react-device-detect';

function Project(props) {
	if (isMobile) {
		return (
			<div>
				<div style={{ fontSize: '2rem', paddingTop: 150, paddingBottom: 10 }}><b>Projects</b></div>
				<div style={{ width: '350px', marginBottom: 100, marginTop: 50}}>
					<div style={{ fontSize: '1.5rem' }}> 2021 개인 웹사이트 </div>
					<br />
					<div style={{ fontSize: '1rem' }}>
						Heroku 배포{' '}
						<a
							href="https://gunwoo.herokuapp.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							(Current Site)
						</a>
					</div>
					<br />
					<RepoCard username="gonudayo" repository="PersonalWebsite-Heroku" />
					<br />
					<RepoCard username="gonudayo" repository="PersonalWebsite-AWS" />
					<br />
					<div style={{ fontSize: '1rem' }}>
						Netlify 배포{' '}
						<a
							href="https://workhard.netlify.app"
							target="_blank"
							rel="noopener noreferrer"
						>
							(구버전)
						</a>
					</div>
					<br />
					<RepoCard username="gonudayo" repository="PersonalWebsite-Netlify" />
				</div>

				<div style={{ width: '350px', paddingBottom: 100 }}>
					<div style={{ fontSize: '1.5rem' }}>
						2021 군장병 공개SW 온라인 해커톤 : 위드 밀리터리
					</div>
					<br />
					<RepoCard username="osamhack2021" repository="Web_With_Military_temp" />
				</div>
				
				<div style={{ width: '350px', paddingBottom: 150 }}>
					<div style={{ fontSize: '1.5rem' }}>
						크롬 확장프로그램 : 유튜브 그만 봐
					</div>
					<br />
					<RepoCard username="gonudayo" repository="Stop-watching-YouTube" />
				</div>
				
				<div style={{ paddingBottom: 50}}>
					<a href="/#" title="맨 위로">Back to top</a>
				</div>
			</div>
		);
	} else {
		return (
			<div>
				<div style={{ fontSize: '2rem', paddingBottom: 100 }}><b>Projects</b></div>
				<div style={{ width: '405px', marginLeft: 50, marginRight: 50, float: 'left', mariginBottom: 100 }}>
					<div style={{ fontSize: '1.5rem' }}> 개인 웹사이트 프로젝트 </div>
					<br />
					<div style={{ fontSize: '1rem' }}>
						Heroku 배포{' '}
						<a
							href="https://gunwoo.herokuapp.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							(Current Site)
						</a>
					</div>
					<br />
					<RepoCard username="gonudayo" repository="PersonalWebsite-Heroku" />
					<br />
					<RepoCard username="gonudayo" repository="PersonalWebsite-AWS" />
					<br />
					<div style={{ fontSize: '1rem' }}>
						Netlify 배포{' '}
						<a
							href="https://workhard.netlify.app"
							target="_blank"
							rel="noopener noreferrer"
						>
							(구버전)
						</a>
					</div>
					<br />
					<RepoCard username="gonudayo" repository="PersonalWebsite-Netlify" />
				</div>

				<div style={{ width: '405px', marginRight: 50, float: 'left', marginBottom: 100 }}>
					<div style={{ fontSize: '1.5rem' }}>
						군장병 공개SW 온라인 해커톤 :<br />위드 밀리터리
					</div>
					<br />
					<RepoCard username="osamhack2021" repository="Web_With_Military_temp" />
				</div>
				
				<div style={{ width: '405px', marginRight: 50, float: 'left' }}>
					<div style={{ fontSize: '1.5rem' }}>
						크롬 확장프로그램 :<br />유튜브 그만 봐
					</div>
					<br />
					<RepoCard username="gonudayo" repository="Stop-watching-YouTube" />
				</div>
			</div>
		);
	}
}
export default Project;
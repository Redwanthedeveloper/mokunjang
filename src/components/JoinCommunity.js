import { SiDiscord, SiTwitter } from 'react-icons/si';

export default ({ joinTheCommunity }) => {
	const { subtitleText, icons } = joinTheCommunity;

	const renderLinks = (linksArray) => {
		return linksArray.map((link) => {
			const { href, Icon } = link;
			return (
				<a href={href} key={href}>
					{Icon}
				</a>
			);
		});
	};

	return (
		<div className="joinCommContainer">
			<div className="joinText">
				<h1>JOIN THE COMMUNITY</h1>
				<p>{subtitleText}</p>
			</div>
			<div className="joinLogos">{renderLinks(icons)}</div>
		</div>
	);
};

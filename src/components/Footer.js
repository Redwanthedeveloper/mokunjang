import { SiInstagram, SiTwitter, SiDiscord, SiYoutube } from 'react-icons/si';

export default ({
	footerIcons,
	footerLogoUrl,
	footerTermsOfService,
	logoText,
}) => {
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
		<footer className="pageFooter">
			<div className="footerCopyright">
				<p>
					{logoText}
					<a href=""> {footerTermsOfService.topText}</a>
				</p>
				<p>
					{footerTermsOfService.bottomText} {logoText}
				</p>
			</div>
			<img className="footerLogo" src={`${footerLogoUrl}`} />
			<div className="footerIcons">{renderLinks(footerIcons)}</div>
		</footer>
	);
};

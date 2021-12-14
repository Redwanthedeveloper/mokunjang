import styles from '../styles/styles.css';

import { useState } from 'react';
export default ({ menuLinks, logoText }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [menuClass, setMenuClass] = useState('hidden');
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
		setMenuClass(isMenuOpen === true ? 'hiddenMenu' : 'hidden');
	};

	const renderLinks = (linksArray) => {
		return linksArray.map((link) => {
			const { href, text, Icon, iconClass } = link;
			return (
				<a href={href} className={iconClass} key={href}>
					{text === '' ? Icon : text}
				</a>
			);
		});
	};

	return (
		<nav className="navBar">
			<div className="menu">
				<span className="logo">{logoText || 'WriteLogo'}</span>
				<div className="openMenu">{renderLinks(menuLinks)}</div>
				<div className="burguerDiv" onClick={() => toggleMenu()}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<div className={menuClass}>{renderLinks(menuLinks)}</div>
		</nav>
	);
};

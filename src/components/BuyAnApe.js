export default ({ buyAnApeText }) => {
	const { titleText, middleText, buttonText } = buyAnApeText;
	return (
		<div className="buyAnApe">
			<h1 className="title">{titleText}</h1>
			<h2 className="text">{middleText}</h2>
			<button>{buttonText}</button>
		</div>
	);
};

const pixelToRem = (size: number) => `${size / 16}rem`;

const fontSizes = {
	title: pixelToRem(128),
	maintitle: pixelToRem(32),
	subtitle: pixelToRem(24),
	paragraph: pixelToRem(20),
};

const colors = {
	black: '#000000',
  fontColor: '#3E3E3E',
  white: '#FFFFFF',
	background: '#EFEBE6',
};

const fontWeight = {
	thin: 400,
	base: 500,
	bold: 600,
};

const theme = {
	fontSizes,
	colors,
	fontWeight,
	// common,
};

export default theme;
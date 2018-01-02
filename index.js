'use strict';
const foregroundColor = '#d3d0c8';
const backgroundColor = '#1a1a1a';
const red = '#f2777a';
const green = '#99cc99';
const yellow = '#ebbd5b';
const blue = '#6699cc';
const magenta = '#ff6ac1';
const cyan = '#66cccc';

exports.decorateConfig = config => Object.assign({}, config, {
	backgroundColor,
	foregroundColor,
	borderColor: '#222430',
	cursorColor: '#97979b',
	colors: {
		black: backgroundColor,
		red,
		green,
		yellow,
		blue,
		magenta,
		cyan,
		white: '#d3d0c8',
		lightBlack: '#808080',
		lightRed: red,
		lightGreen: green,
		lightYellow: yellow,
		lightBlue: blue,
		lightMagenta: magenta,
		lightCyan: cyan,
		lightWhite: foregroundColor
	}
});

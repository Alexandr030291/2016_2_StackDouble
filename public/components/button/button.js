(function () {
	'use strict';

	const Block = window.Block;

	class Button extends Block {
		constructor(options) {
			super('button', options);
			this._el.innerText = this._options.text || 'Press me';
		}
	}

	/* export */
	window.Button = Button;
}());

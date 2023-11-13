class MediaQueryHandler {
	constructor(options) {
			let defaultOptions = {
					width: 'min',
					breakpoint: 768,
					trueChange: () => { },
					falseChange: () => { },
			};

			this.options = Object.assign(defaultOptions, options);
			this.mediaQuery = window.matchMedia(`(${this.options.width}-width: ${this.options.breakpoint}px)`);
			this.mediaQuery.addEventListener("change", this.handleMediaChange.bind(this));
	}

	handleMediaChange(event) {
			if (event.matches) {
					this.options.trueChange(this);
			} else {
					this.options.falseChange(this);
			}
	}
}
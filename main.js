window.addEventListener("DOMContentLoaded", () => {
	const ms = new LogoAnimation("#logo", ".logo");
});

class LogoAnimation {
	constructor(buttonQS, svgQS) {
		this.button = document.querySelector(buttonQS);
		this.svg = document.querySelector(svgQS);
		this.lastAnimPart = this.svg?.querySelector(`${svgQS} [data-anim]`);
		this.playClass = "logo--running";
		this.button?.addEventListener("click", this.replay.bind(this));
		this.lastAnimPart?.addEventListener("animationend", this.stop.bind(this));
		this.replay();
	}

	replay() {
		if (!this.button.disabled) {
			this.button.disabled = true;
			this.svg?.classList.add(this.playClass);
		}
	}

	stop() {
		this.button.disabled = false;
		this.svg?.classList.remove(this.playClass);
	}
}

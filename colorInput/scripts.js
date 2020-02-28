class HueInput extends HTMLInputElement {
  connectedCallback() {
    this.addEventListener("input", this.handleChange);
  }

  disconnectedCallback() {
    this.removeEventListener("input", this.handleChange);
  }

  handleChange = () => {
    this.style.backgroundColor = `hsl(${this.value}, 50%, 50%)`;
  };
}

customElements.define("hue-input", HueInput, { extends: "input" });

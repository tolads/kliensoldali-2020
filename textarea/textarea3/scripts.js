class TextareaWCount extends HTMLElement {
  connectedCallback() {
    this.textarea = this.querySelector("textarea");
    const div = document.createElement("div");
    div.innerHTML = "Character count: <span>0</span>";
    this.textarea.parentNode.insertBefore(div, this.textarea.nextSibling);
    this.span = div.querySelector("span");

    this.updateCount();
    this.textarea.addEventListener("input", this.updateCount);
  }

  disconnectedCallback() {
    this.textarea.removeEventListener("input", this.updateCount);
  }

  updateCount = () => {
    this.span.textContent = this.textarea.value.length;
  };
}

customElements.define("textarea-w-count", TextareaWCount);

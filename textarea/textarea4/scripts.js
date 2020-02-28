class TextareaWCount extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const template = document.querySelector("template");
    const content = template.content.cloneNode(true);
    this.shadowRoot.appendChild(content);

    this.textarea = this.querySelector("textarea");
    this.span = this.shadowRoot.querySelector("span");

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

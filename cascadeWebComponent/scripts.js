class CascadeDropdown extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const template = document.querySelector("template");
    const content = template.content.cloneNode(true);
    this.shadowRoot.appendChild(content);

    this.origSelect = this.querySelector("select");
    this.collect();
    this.updateDom();
  }

  collect() {
    this.items = new Map();
    Array.from(this.origSelect.querySelectorAll("optgroup")).forEach(group => {
      const options = Array.from(group.querySelectorAll("option")).map(option => ({
        value: option.value,
        label: option.innerText
      }));
      this.items.set(group.label, options);
    });
  }

  updateDom() {
    this.groupSelect = this.shadowRoot.querySelector("select.groupSelect");
    this.groupSelect.innerHTML = Array.from(this.items.keys())
      .map(groupName => `<option>${groupName}</option>`)
      .join();
    this.groupSelect.addEventListener("change", this.handleChange);

    this.optionSelect = this.shadowRoot.querySelector("select.optionSelect");
    this.fillOptions(Array.from(this.items.keys())[0]);
    this.optionSelect.addEventListener("change", this.handleOptionChange);
  }

  fillOptions(groupName) {
    this.optionSelect.innerHTML = this.items
      .get(groupName)
      .map(option => `<option value="${option.value}">${option.label}</option>`)
      .join();
  }

  handleChange = event => {
    const groupName = event.target.value;
    this.fillOptions(groupName);
    this.handleOptionChange();
  };

  handleOptionChange = () => {
    this.origSelect.value = this.optionSelect.value;
  };
}

customElements.define("cascade-dropdown", CascadeDropdown);

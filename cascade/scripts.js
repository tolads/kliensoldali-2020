class Cascade {
  constructor(origSelect) {
    this.origSelect = origSelect;
    // az volt a baj órán, hogy a konstruktor végén volt ez a hívás,
    // az eseménykezelőbe a régi this.handleChange volt megadva,
    // amit utána viszont felülcsaptunk egy újjal
    // this.handleChange = this.handleChange.bind(this);
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
    const parent = this.origSelect.parentNode;

    this.groupSelect = document.createElement("select");
    parent.insertBefore(this.groupSelect, this.origSelect);
    this.groupSelect.innerHTML = Array.from(this.items.keys())
      .map(groupName => `<option>${groupName}</option>`)
      .join();
    this.groupSelect.addEventListener("change", this.handleChange);

    this.optionSelect = document.createElement("select");
    parent.insertBefore(this.optionSelect, this.origSelect);
    this.optionSelect.name = this.origSelect.name;
    this.fillOptions(Array.from(this.items.keys())[0]);

    parent.removeChild(this.origSelect);
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
  };
}

new Cascade(document.querySelector("select[name='pets']"));

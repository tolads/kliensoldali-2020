// 1.
$(".single_blog_part > img")
  .wrap('<span style="display:inline-block"></span>')
  .css("display", "block")
  .parent()
  .zoom();

// 2.
const scrollButton = document.createElement("button");
scrollButton.id = "scroll-up";
document.body.appendChild(scrollButton);

window.addEventListener("scroll", function() {
  const bannerHeight = document.querySelector(".banner_part").scrollHeight;
  scrollButton.classList.toggle("show", scrollY > bannerHeight);
});

scrollButton.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
});

// 3.
class EmailField extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const template = document.getElementById("email-field-template");
    const content = template.content.cloneNode(true);
    this.shadowRoot.appendChild(content);

    this.fullEmail = this.querySelector("input[name='email']");
    this.partOne = this.shadowRoot.querySelector("input.partOne");
    this.partTwo = this.shadowRoot.querySelector("input.partTwo");

    this.partOne.addEventListener("input", this.updateField);
    this.partTwo.addEventListener("input", this.updateField);
  }

  disconnectedCallback() {
    this.partOne.removeEventListener("input", this.updateField);
    this.partTwo.removeEventListener("input", this.updateField);
  }

  updateField = () => {
    this.fullEmail.value = `${this.partOne.value}@${this.partTwo.value}`;
  };
}

customElements.define("email-field", EmailField);

const template = document.querySelector("template");
const content = template.content.cloneNode(true);
const textarea = document.querySelector("textarea");
const parent = textarea.parentNode;
parent.replaceChild(content, textarea);
const templateTextarea = parent.querySelector("textarea");
templateTextarea.parentNode.replaceChild(textarea, templateTextarea);

const span = parent.querySelector("span");

const updateCount = () => {
  span.textContent = textarea.value.length;
};
updateCount();
textarea.addEventListener("input", updateCount);

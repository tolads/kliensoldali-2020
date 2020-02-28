const textarea = document.querySelector("textarea");
const div = document.createElement("div");
div.innerHTML = "Character count: <span>0</span>";
textarea.parentNode.insertBefore(div, textarea.nextSibling);
const span = div.querySelector("span");

const updateCount = () => {
  span.textContent = textarea.value.length;
};
updateCount();
textarea.addEventListener("input", updateCount);

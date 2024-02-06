const selectField = document.querySelector("#selectField");
const arrowImg = document.querySelector("#arrowImg");
const list = document.querySelector("#list");
const selectText = document.querySelector("#text");
const options = document.getElementsByClassName("options");

for (o of options) {
  o.onclick = function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hide");
    arrowImg.classList.toggle("rotate");
  };
}
selectField.onclick = function () {
  list.classList.toggle("hide");
  arrowImg.classList.toggle("rotate");
};

const addButton = document.querySelector(".button");
const list = document.getElementById("list");
const inputVal = document.getElementById("task");

addButton.addEventListener("click", () => {
  const node = document.createElement("li");

  const textnode = document.createTextNode(`${inputVal.value}`);

  if (inputVal.value.length < 1) {
    return alert("Boş yazı ekleyemezsin!");
  }

  node.appendChild(textnode);

  document.getElementById("list").appendChild(node);

  inputVal.value = "";
});

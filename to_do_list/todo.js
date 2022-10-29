// Função para criar um li
function newLi(id, item) {
  const li = document.createElement("li");
  li.id = id;
  li.innerText = item + "   ";
  li.className = li;
  return li;
}

//Adicionando o botão 'add' e a lista 'ul' ao javascript
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

// Flex para a Lista
list.style.display = "flex";
list.style.flexDirection = "Column";
list.style.gap = "20px";

//Indíce para cada linha na lista
let rowIndex = 0;

//Criando função para o botão 'add'
addBtn.addEventListener("click", function (ev) {
  let item = document.getElementById("item").value;
  rowIndex++;

  //Criando o li com seu índice
  let Li = newLi("row" + rowIndex, item);

  //Flex para o Li
  Li.style.display = "flex";
  Li.style.justifyContent = "center";
  Li.style.gap = "20px";

  // Criar o botão "remove"
  let removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "removeBtn";
  removeBtn.innerText = "remove";

  // Estilização do Botão
  removeBtn.style.fontSize = "17px";
  removeBtn.style.color = "White";
  removeBtn.style.backgroundColor = "#DD1C1A";
  removeBtn.style.border = "none";
  removeBtn.style.height = "25px";
  removeBtn.style.width = "70px";
  removeBtn.style.borderRadius = "7px";
  removeBtn.style.cursor = "pointer";
  removeBtn.style.padding = "0px";

  // Remove o item
  removeBtn.addEventListener("click", function () {
    list.removeChild(Li);
  });

  // Adicionando o botao 'remove' na Li e adicionando-o na lista
  Li.appendChild(removeBtn);
  list.appendChild(Li);

  item = document.getElementById("item").value = "";
});

// Remove todos os itens
const removeAllBtn = document.getElementById("removeAllBtn");
removeAllBtn.addEventListener("click", function () {
  const removeAll = document.querySelector(".listToRemove");
  removeAll.innerHTML = "";
});

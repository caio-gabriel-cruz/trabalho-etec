document.querySelectorAll(".add").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("car-aba").style.display = "flex";

    let nameElement = button.parentNode.querySelector(".borda div p");
    let name = nameElement ? nameElement.textContent : "";

    let priceElement = button.parentNode.querySelector(".valor");
    let price = priceElement ? parseFloat(priceElement.value) || 0 : 0;

    let totalElement = document.querySelector(".total-valor");
    let currentTotal =
      parseFloat(totalElement.textContent.replace("R$", "")) || 0;
    let newTotal = currentTotal + price;
    totalElement.textContent = `R$${newTotal.toFixed(2)}`;

    let divCar = document.getElementById("car-list");
    let newItem = document.createElement("div");
    newItem.classList.add("item");

    let itemNameDiv = document.createElement("div");
    itemNameDiv.classList.add("item-name");

    let deleteButton = document.createElement("span");
    deleteButton.textContent = "x";
    deleteButton.classList.add("delete");
    itemNameDiv.appendChild(deleteButton);

    let itemNameParagraph = document.createElement("p");
    itemNameParagraph.textContent = name;
    itemNameDiv.appendChild(itemNameParagraph);

    newItem.appendChild(itemNameDiv);

    let priceDiv = document.createElement("div");
    let priceSpan = document.createElement("span");
    priceSpan.textContent = "R$";

    let priceInput = document.createElement("input");
    priceInput.classList.add("valor");
    priceInput.setAttribute("type", "text");
    priceInput.setAttribute("disabled", true);
    priceInput.value = price.toFixed(2);

    priceDiv.appendChild(priceSpan);
    priceDiv.appendChild(priceInput);

    newItem.appendChild(priceDiv);

    divCar.appendChild(newItem);

    deleteButton.addEventListener("click", (e) => {
      e.preventDefault();
      divCar.removeChild(newItem);

      newTotal -= price;
      totalElement.textContent = `R$${newTotal.toFixed(2)}`;
    });
  });
});

document.querySelectorAll(".fechar").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("car-aba").style.display = "none";
    document.getElementById("car").style.display = "flex";
  });
});

document.querySelectorAll("#car").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("car-aba").style.display = "flex";
    document.getElementById("car").style.display = "none";
  });
});

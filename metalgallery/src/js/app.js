import { products } from "../constant/products.js";

document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.getElementById("main2");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "borda";
    productDiv.innerHTML = `
      <img class="img" src="${product.image.url}" alt="${product.image.alt}">
      <p>${product.name}</p>
      <span>R$</span><input class="valor" value="${product.value}" type="text" disabled>
      <button type="button" class="add">Adicionar ao carrinho</button>
    `;
    productsContainer.appendChild(productDiv);
  });

  productsContainer.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("add")) {
      e.preventDefault();
      document.getElementById("car-aba").style.display = "flex";

      const button = e.target;
      const productDiv = button.closest(".borda");
      const name = productDiv.querySelector("p").textContent;
      const price = parseFloat(productDiv.querySelector(".valor").value);

      // Atualizar total do carrinho
      const totalElem = document.querySelector(".total-valor");
      const currentTotal = parseFloat(
        totalElem.textContent.replace("R$", "").replace(",", ".")
      );
      const newTotal = currentTotal + price;
      totalElem.textContent = `R$${newTotal.toFixed(2).replace(".", ",")}`;

      // Adicionar item ao carrinho
      const carList = document.getElementById("car-list");
      const newItem = document.createElement("div");
      newItem.classList.add("item");

      newItem.innerHTML = `
        <div class="item-name">
          <span class="delete">x</span>
          <p>${name}</p>
        </div>
        <div>
          <span>R$</span><input class="valor" value="${price.toFixed(
            2
          )}" type="text" disabled>
        </div>
      `;

      carList.appendChild(newItem);

      // Adicionar evento de clique para remover item do carrinho
      newItem.querySelector(".delete").addEventListener("click", () => {
        newItem.remove();
        const updatedTotal =
          parseFloat(
            totalElem.textContent.replace("R$", "").replace(",", ".")
          ) - price;
        totalElem.textContent = `R$${updatedTotal
          .toFixed(2)
          .replace(".", ",")}`;
      });
    }
  });

  document.querySelector(".fechar").addEventListener("click", () => {
    document.getElementById("car-aba").style.display = "none";
  });

  document.getElementById("car").addEventListener("click", () => {
    document.getElementById("car-aba").style.display = "flex";
  });
});

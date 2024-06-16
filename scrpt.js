// function add(button) {

//     var itemValue = button.parentNode.querySelector('.valor').value;
    
//     var carrinho = document.getElementById('carrinho');
//     var carrinhoValue = parseFloat(carrinho.value);
    

//     carrinho.value = (carrinhoValue + parseFloat(itemValue)).toFixed(2);
// }


document.querySelectorAll('.add').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('car-aba').style.display = 'flex';
        let name = button.parentNode.querySelectorAll('.borda div p');
        name.forEach(p => {
            name = p.textContent;
        });










        // calcular total do carrinho

        let price = button.parentNode.querySelectorAll('.valor');
        price.forEach(pr => {
            price = pr.value;
            let total = 0;
            let valor = parseFloat(price) || 0;
            total += valor;  // Adicionar o valor atual à variável de soma

            console.log(total);
            document.querySelector('.total-valor').textContent = `R$${total.toFixed(2)}`;
        });
















            // Converter o valor do elemento para um número (caso seja uma string numérica)

        let divCar = document.getElementById('car-list');
        
        // Criar a div com a classe 'item'
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.setAttribute('id', 'item');

        // Criar o primeiro elemento interno: div com classe 'item-name' e um parágrafo vazio
        let itemNameDiv = document.createElement('div');
        itemNameDiv.classList.add('item-name');
        let x = document.createElement('span');
        x.textContent = 'x';
        x.classList.add('delete');
        itemNameDiv.appendChild(x);
        let itemNameParagraph = document.createElement('p');
        itemNameParagraph.textContent = name;
        itemNameDiv.appendChild(itemNameParagraph);
        newItem.appendChild(itemNameDiv);

        // Criar o segundo elemento interno: div com um span 'R$' e um input com classe 'valor' desabilitado
        let priceDiv = document.createElement('div');
        let priceSpan = document.createElement('span');
        priceSpan.textContent = 'R$';
        let priceInput = document.createElement('input');
        priceInput.classList.add('valor');
        priceInput.setAttribute('type', 'text');
        priceInput.setAttribute('disabled', true);
        priceInput.value = price;
        priceDiv.appendChild(priceSpan);
        priceDiv.appendChild(priceInput);
        newItem.appendChild(priceDiv);

        // Adicionar a nova div completa ao elemento pai
        divCar.appendChild(newItem);
        document.querySelectorAll('.delete').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                document.getElementById('item').style.display = 'none';
        
            });
        });
    });
});

document.querySelectorAll('.fechar').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('car-aba').style.display = 'none';
        document.getElementById('car').style.display = 'flex';
    });
});

document.querySelectorAll('#car').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('car-aba').style.display = 'flex';
        document.getElementById('car').style.display = 'none';
    });
});




// document.querySelectorAll('.car-aba button').forEach(button => {
//     button.addEventListener('click', (e) => {
//         e.preventDefault();
//         window.alert('Please');

//     });
// });
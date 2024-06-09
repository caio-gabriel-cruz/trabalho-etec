function add(button) {

    var itemValue = button.parentNode.querySelector('.valor').value;
    
    var carrinho = document.getElementById('carrinho');
    var carrinhoValue = parseFloat(carrinho.value);
    

    carrinho.value = (carrinhoValue + parseFloat(itemValue)).toFixed(2);
}

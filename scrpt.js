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

let quantidaden = 1;
document.querySelector('.quantidade').value = quantidaden;

document.querySelectorAll('#minus').forEach(button => {
    button.addEventListener('click', (e) => {
        if (quantidaden == 1) {
            document.getElementById('car-aba').style.display = 'none';
        } else{
            quantidaden--;
            document.querySelector('.quantidade').value = quantidaden;
        }
        console.log(quantidaden);
    });
});

document.querySelectorAll('#plus').forEach(button => {
    button.addEventListener('click', (e) => {
       quantidaden++;
       document.querySelector('.quantidade').value = quantidaden;
    });
});
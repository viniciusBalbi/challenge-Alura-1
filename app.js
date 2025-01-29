//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let input = document.querySelector('input').value.trim(); 

    if (input === '') {
        alert('Por favor, insira um nome.');
    } else if (!amigos.includes(input)) { 
        amigos.push(input);
        atualizarListaAmigos();
        cleanCampo();
    } else {
        alert('Esse nome já foi adicionado.');
    }
}

function cleanCampo() {
    document.querySelector('input').value = '';
}

function atualizarListaAmigos() {
    let lista = document.querySelector('ul');
    lista.innerHTML = '';

    amigos.forEach((amigo) => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length > 0) {   
        let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById('resultado').textContent = `Amigo sorteado: ${sorteado}`;
    } else {
        alert('Adicione pelo menos um amigo antes de sortear.');
    }
}

// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    // Captura o valor inserido no campo de texto
    let nome = document.getElementById('amigo').value.trim();

// Valida se o campo está vazio
if (nome === '') {
    alert('Por favor, insira um nome.');
    return;
}

  // Verifica se o nome já foi adicionado
  if (amigos.includes(nome)) {
    alert('Esse nome já foi adicionado.');
    return;
}

    // Adiciona o nome ao array de amigos
    amigos.push(nome);

        // Atualiza a lista de amigos na tela
        atualizarLista();
  
     // Limpa o campo de entrada
     document.getElementById('amigo').value = '';
    }
  
    // Função para atualizar a lista de amigos na tela
function atualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista antes de atualizar

    amigos.forEach((amigo, index) => {
        let li = document.createElement('li');
        li.textContent = amigo;

        // Adiciona um botão para remover o nome
        let botaoRemover = document.createElement('button');
        botaoRemover.textContent = '❌';
        botaoRemover.onclick = function() {
            removerAmigo(index);
        };

        li.appendChild(botaoRemover);
        listaAmigos.appendChild(li);
    });
}

// Função para remover um amigo da lista
function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione pelo menos um nome antes de sortear.");
        return;
    }

    // Gera um índice aleatório
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado
    let amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado na página
    document.getElementById("resultado").innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;
}

const form = document.getElementById('form-telefone');
const nomeContato = [];
const numeros = [];


let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('name-contact');
    const inputNumeroContato = document.getElementById('number-contact');

    if(nomeContato.includes(inputNomeContato)){
        alert( `O contato ${inputNomeContato.value} já foi adicionado`);
    }else{
    nomeContato.push(inputNomeContato.value);
    numeros.push(parseFloat(inputNumeroContato.value));


    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value} </td>`;
    linha += `<td>${inputNumeroContato.value} </td>`;
    linha += '</tr>';

    linhas += linha;
    }
    
    inputNomeContato.value ='';
    inputNumeroContato.value ='';
    
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


function alterarNome() {
    let trocarNome = document.getElementById('inputNome').value;

    if (trocarNome === '') {
        alert('Digite um nome!')
    } else {
        document.getElementById('nomeUsuario').innerHTML = trocarNome;
    }
}

function alterarCurso() {
    let trocarCurso = document.getElementById('inputCurso').value;

    if (trocarCurso === '') {
        alert('Digite um curso!')
    } else {
        document.getElementById('nomeCurso').innerHTML = trocarCurso;
    }
}

function alterarStatus() {
    let trocarStatus = document.getElementById('inputStatus').value;

    if (trocarStatus === '') {
        alert('Digite um Status!')
    } else {
        document.getElementById('Status').innerHTML = trocarStatus;
    }
}
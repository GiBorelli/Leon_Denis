const scriptURL = 'https://script.google.com/macros/s/AKfycbxsKhHwZUG64JLvqDSsSfpdNsvJCRoHLlrc9bY9vqry9ygmvc8FXXfgng3Q_g5jUrV1/exec'

const form = document.forms['cadastro-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Cadastro feito com sucesso!"))
    .then(() => {window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbwshvGfwBcRF8gbcv6KQQMlNWLrT8QY476nR_XwlgxWRJ5b2b09G0-YzymhONYv-QL4VQ/exec'

const form = document.forms['cadastro-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Cadastro feito com sucesso!"))
    .then(() => {window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})

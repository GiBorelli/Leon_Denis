const scriptURL = 'https://script.google.com/macros/s/AKfycbyyQLKOdaLru77I_uua7-kwff3-z9Y-91NeFziWhneAKs03KiJvzsrnzuDf4SAIx0DByg/exec'

const form = document.forms['cadastro-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Cadastro feito com sucesso!"))
    .then(() => {window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})

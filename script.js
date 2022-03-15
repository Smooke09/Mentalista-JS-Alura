
function Chutar() {
    let numeroSecreto = parseInt(Math.random() * 11)
    let chute = parseInt(document.getElementById('valor').value)
    console.log(chute)

    if (chute == numeroSecreto) {
        let chute = parseInt(document.getElementById('valor').value)
        let res = document.getElementById('resultado')
        res.innerHTML = `Parabens voce acertou o numero`
    } else if (chute > 10 || chute < 0) {
        let chute = parseInt(document.getElementById('valor').value)
        let res = document.getElementById('resultado')
        res.innerHTML = `Digite um numero de 0 a 10!!`
    } else if (chute != numeroSecreto) {
        let chute = parseInt(document.getElementById('valor').value)
        let res = document.getElementById('resultado')
        res.innerHTML = `Voce errou o numero secreto era ${numeroSecreto} recarregue a pagina e tente novamente`
    }
}
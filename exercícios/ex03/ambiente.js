
    let número = document.getElementById('numtxt')
    let lista = document.getElementById('lista')
    let res = document.getElementById('res')
    
    
    
    function adicionar() {
        let list = Number(lista.value)
        let num = Number(número.value)

    if (num <= 0 || num >= 101) {
        window.alert('[ERRO] Digite um número válido entre 1 e 100!')
    } else {
        let item = document.createElement('option')
        item.text = `Valor ${num} foi adicionado`
        lista.appendChild(item)
      }
    }

    function finalizar() {

    }
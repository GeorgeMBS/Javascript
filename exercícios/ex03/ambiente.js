
/* Primeiro pegamos os elementos e transformamos em variáveis. O número digitado no input, a lista no select, a div que mostrará o resultado e também criamos a Array que vai armazenar os números */ 

    let num = document.getElementById('numtxt')
    let lista = document.getElementById('lista') 
    let res = document.getElementById('res')
    let valores = []
    
//Em seguida criamos as funções que vão verificar se o número digitado é entre 1 a 100 e se o número digitado já não está na lista.//

    function isNumero(n) {
        if (Number(n) >= 1 && Number(n) <= 100) {
            return true
        } else {
            return false
        }
    } //Básicamente diz "Se o número no parâmetro recebido (n) for maior ou igual á 1 e menor ou igual á 100, retorne verdadeiro. Senão, retorne falso."

    function inlista(n, l) {
        if (l.indexOf(Number(n)) != -1) {
            return true
        } else {
            return false
        }
    }// Básicamente diz "Se o número não estiver na lista retorne verdadeiro. Senão, retorne falso."
    


    //Aqui ele joga o valor de "num" como parâmetro nas funções acima, na primeira para verificar se é um número entre 1 e 100 e na segunda para verificar se o número já está na lista. Se o número não estiver na lista e estiver entre 1 e 100, ele vai adicionar esse número na array -- valores.push(Number(num.value)) --, vai criar a variável item, contendo um elemento option -- let item = document.createElement('option') --, vai definir o texto deste elemento -- item.text = `Valor ${num.value} adicionado.` -- e vai incluir este elemento na lista do nosso select -- lista.appendChild(item) --. Senão, ele vai mostrar uma mensagem na tela -- window.alert('Valor inválido ou já encontrado na lista.') -- função finalizada, ele vai limpar o campo de adicionar e vai colocar o foco no input. -- num.value = '' num.focus() --//

    function adicionar() { 
        if (isNumero(num.value) && !inlista(num.value, valores)) { 
            valores.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado.`
            lista.appendChild(item)
            res.innerHTML = ''
        } else{
            window.alert('Valor inválido ou já encontrado na lista.')
        }
        num.value = ''
        num.focus()
    }

    function finalizar() {
        if (valores.length == 0) {
            window.alert('Adicione valores antes de finalizar!')
        } else {
            let tot = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0
            for(let pos in valores) {
                soma += valores[pos]
                if (valores[pos] > maior)
                maior = valores[pos]
                if (valores[pos] < menor)
                menor = valores[pos]
            }
            media = soma / tot
            res.innerHTML - ''
            res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
            res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
            res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
            res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
            res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
        }
    }
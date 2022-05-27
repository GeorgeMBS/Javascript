function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO!] Verifique seus dados e tente novamente.')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
           gênero = 'Homem'
           if (idade >= 0 && idade < 4){
               //Bebê 
               img.setAttribute('src', 'imagens/bebê menino pq.jpg')
        } else if (idade >= 4 && idade < 10) {
               //Criança
               img.setAttribute('src', 'imagens/criança menino pq.jpg')
        } else if (idade < 21) {
               // Jovem
               img.setAttribute('src', 'imagens/adolescente menino pq.jpg')
        } else if (idade < 50) {
               // Adulto
               img.setAttribute('src', 'imagens/adulto homem pq.jpg')
        } else {
               // Idoso
               img.setAttribute('src', 'imagens/idoso pq.jpg')
        }

       } else if (fsex[1].checked) {
           gênero = 'Mulher'
           if (idade >= 0 && idade < 4){
            //Bebê
            img.setAttribute('src', 'imagens/bebê.menina.pq.jpg')
        } else if (idade <= 4 && idade < 10) {
            //Criança
            img.setAttribute('src', 'imagens/criança menina pq.jpg')
        } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'imagens/adolescente menina pq.jpg')
        } else if (idade < 50) {
            // Adulto
            img.setAttribute('src', 'imagens/adulto mulher pq.jpg')
        } else {
            // Idoso
            img.setAttribute('src', 'imagens/idosa pq.jpg')
        }
       }
       
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       seção.appendChild(img)
       document.getElementById("foto").style.borderColor = "black" 
       document.getElementById("foto").style.borderRadius = "250px" 
       document.getElementById("foto").style.position = "absolute"
       document.getElementById("foto").style.left = "41.8%"
       document.getElementById("foto").style.top = "57%"
       document.getElementById("foto").style.margin = "20px"
     
    }
   
}

function reload () {
    window.location.reload()
}

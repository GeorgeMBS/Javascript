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
               img.setAttribute('src', 'bebê menino pq.jpg')
           } else if (idade < 10) {
               //Criança
               img.setAttribute('src', 'criança menino pq.jpg')
           } else if (idade < 21) {
               // Jovem
               img.setAttribute('src', 'adolescente menino pq.jpg')
           } else if (idade < 50) {
               // Adulto
               img.setAttribute('src', 'adulto homem pq.jpg')
           } else {
               // Idoso
               img.setAttribute('src', 'idoso pq.jpg')
           }

       } else if (fsex[1].checked) {
           gênero = 'Mulher'
           if (idade >= 0 && idade < 4){
            //Bebê 
            img.setAttribute('src', 'bebê menina pq.jpg')
        } else if (idade < 10) {
            //Criança
            img.setAttribute('src', 'criança menina pq.jpg')
        } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'adolescente menina pq.jpg')
        } else if (idade < 50) {
            // Adulto
            img.setAttribute('src', 'adulto homem pq.jpg')
        } else {
            // Idoso
            img.setAttribute('src', 'idosa pq.jpg')
        }
       }
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
    }
}
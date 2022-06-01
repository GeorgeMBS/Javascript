function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()

msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos!`

if (hora >= 0 && hora < 12){
    //BOM DIA!
    img.src = 'imagens/manhãpq.jpg'
    document.body.style.background = '#C5732D'
    frase.innerHTML = 'BOM DIA!'
} else if (hora >= 12 && hora < 18) {
    // BOA TARDE!
    img.src = 'imagens/tardepq.jpg'
    document.body.style.background = '#7C7A5E'
    frase.innerHTML = 'BOA TARDE!'
} else {
    // BOA NOITE!
    img.src = 'imagens/noitepq.jpg'
    document.body.style.background = '#181F29'
    frase.innerHTML = 'BOA NOITE!'
}
}
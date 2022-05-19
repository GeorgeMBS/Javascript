var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var dia = agora.getDay()
var mês = agora.getMonth()
var ano = agora.getFullYear()

switch(dia) {
    case 0:
        var dia = 'Hoje é Domingo'
        break
    case 1:
        var dia = 'Hoje é Segunda'
        break  
    case 3:
        var dia = 'Hoje é Terça'
        break
    case 4:
        var dia = 'Hoje é Quarta'
        break
    case 5:
        var dia = 'Hoje é Quinta'
        break
    case 6:
        var dia = 'Hoje é Sexta'
        break
    case 7:
        var dia = 'Hoje é Sábado'
        break
    default:
        var dia = 'Erro! Dia inválido.'
        break                                 
}

console.log(`Agora são exatamente ${hora} horas e ${min} minutos, ${dia}, e estamos em ${mês} de ${ano}.`)

if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}
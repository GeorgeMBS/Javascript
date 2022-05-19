var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var dia = agora.getDay()
var mês = agora.getMonth()
var ano = agora.getFullYear()

console.log(`Agora são exatamente ${hora} horas e ${min} minutos, dia ${dia}, e estamos em ${mês} de ${ano}.`)

if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}
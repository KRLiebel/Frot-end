var h = new Date()
var min = new Date()
var d = new Date()
var m = new Date()
var mês = m.getMonth()
var dia = d.getDay()
var hora = h.getHours()
var minutos = min.getMinutes()

console.log('CALENDARIO!')
console.log('Que horas são agora?')
console.log(`Agora são ${hora}:${minutos} horas.`)
if (hora <= 12){
    console.log('Bom dia!')
}else if ( hora <= 18) {
    console.log('Boa tarde!')
}
else{
    console.log('Boa noite!')
}
console.log('Que dia da semana é hoje?')
switch (dia){
    case 0: console.log('hoje é domingo.')
    break
    case 1: console.log('hoje é Segunda-feira.')
    break
    case 2: console.log('hoje é Terça-feira.')
    break
    case 3: console.log('hoje é Quarta-feira.')
    break
    case 4: console.log('hoje é Quinta-feira.')
    break
    case 5: console.log('hoje é Sexta-feira.')
    break
    case 6: console.log('hoje é Sábado.')
    break
    default: console.log('{ERRO} Dia invalido!.')
    break
}
console.log('De que mês?')
switch (mês){
    case 0: console.log('Janeiro.')
    break
    case 1: console.log('Fevereiro.')
    break
    case 2: console.log('Março')
    break
    case 3: console.log('Abril.')
    break
    case 4: console.log('Maio.')
    break
    case 5: console.log('Junho')
    break
    case 6: console.log('Julho.')
    break
    case 7: console.log('Agosto.')
    break
    case 8: console.log('Setembro')
    break
    case 9: console.log('Outubro.')
    break
    case 10: console.log('Novembro.')
    break
    case 11: console.log('Dezembro')
    break
}
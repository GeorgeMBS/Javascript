let valores = [8, 1, 7, 4, 2, 9]

for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    //explicando como o vallor correto aparece após "valor": É por que no segundo placeholder ele está chamando o nome da variável e entre colchetes onde colocariamos o número do item que queremos mostrar ele está colocando o valor atual de "pos" naquele turno do repetidor.//
    
}

valores.sort()
console.log(valores)
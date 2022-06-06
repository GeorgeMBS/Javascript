let numeros = [1, 9, 8, 4, 3, 5, 4]
for(let posição in numeros) {
    console.log(`A posição ${posição} tem ${numeros[posição]}`)
}

console.log("Vamos arrumar isto...")

numeros.sort()

for(let posição in numeros) {
    console.log(`A posição ${posição} tem ${numeros[posição]}`)
}

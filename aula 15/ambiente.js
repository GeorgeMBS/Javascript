let num = [2,1,4,3,6,5]
num[6] = 7
let res = num[2]+num[5]
console.log(num)
console.log(`Nosso vetor é o ${num}`)
console.log(`nosso res é ${res}`) 

num.push(8)
num.sort()


console.log(`Depois de organizado, nosso vetor é o ${num}`)
console.log(`O nosso vetor tem ${num.length} posições!`)
console.log(`nosso resultado é ${res}`)

let pos = num.indexOf(6)

console.log("Onde está o valor 6?")
console.log(`O valor 6 está na posição ${pos}`)
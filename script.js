const nomes = [];

const nomePessoas = ['Alberto', 'Pedro', 'Gustavo', 'Breno']



nomes.push('Breno Oliveira')

// console.log(nomes);

nomes.push('Edmar Cagão');

// console.log(nomes);


const idades = [12, 34, '45', 92, 86, 19, 75, 21]
// console.log(idades[5]);

// Iterar um Array com For

for (let index = 0; index < idades.length; index++) {
    // console.log(idades[index]);
    
}

idades.forEach(function (value, index, idades) {
    console.log(value*3);
})


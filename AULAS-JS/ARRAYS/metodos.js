//MÉTODO DE ARRAY
  
// every() - verifica se todos os elementos do array satisfazem uma determinada condição e retorna true ou false.
// some() - verifica se pelo menos um elemento do array satisfaz uma determinada condição e retorna true ou false.
// filter() - cria um novo array com todos os elementos que satisfazem uma determinada condição.
// forEach() - executa uma determinada função para cada elemento do array.
// indexOf() - retorna a posição do primeiro elemento encontrado no array, ou -1 se não encontrar.
// lastIndexOf() - retorna a posição do último elemento encontrado no array, ou -1 se não encontrar.
// map() - cria um novo array com os resultados da aplicação de uma determinada função em cada elemento do array.
// concat() - junta dois ou mais arrays e retorna um novo array resultante da concatenação.
// join() - converte o array em uma string separada por um separador especificado.
// push() - adiciona um ou mais elementos no final do array.
// pop() - remove o último elemento do array e retorna o elemento removido.
// shift() - remove o primeiro elemento do array e retorna o elemento removido.
// unshift() - adiciona um ou mais elementos no início do array.
// reduce() - executa uma determinada função em cada elemento do array para reduzir o array a um único valor.
// reduceRight() - executa uma determinada função em cada elemento do array da direita para a esquerda para reduzir o array a um único valor.
// reverse() - inverte a ordem dos elementos do array.
// slice() - retorna uma parte do array, com base nos índices de início e fim especificados.
// splice() - adiciona ou remove elementos do array a partir de uma posição especificada.



var arr = ['1',20,3,4,5, 'kjkl', 20, "30"];

let sohNumeros = arr.every( function(el){
    return typeof el === 'number';                
} );
console.log(sohNumeros);

let aoMenosUmNumero = arr.some( function(el){
    return typeof el === 'number';                
} );
console.log(aoMenosUmNumero);

let numeros = arr.filter(function(el, i, arr){
    return typeof el === 'number';
});
console.log(numeros)

arr.forEach(function(el, i, arr){
    console.log('el=', el, '  |  i=', i, '  |  i - ', arr.toString());
})


let posicaoStr1 = arr.indexOf(20, 5);
console.log('posicaoStr1', posicaoStr1);

let posicaoStr2 = arr.lastIndexOf(20, 5);
console.log('posicaoStr2', posicaoStr2);

console.log(numeros);
numeros = numeros.map(function(el, i, arr){
    return el * i;
});            
console.log(numeros);

let arr2 = arr.concat(numeros, 'ola', 'arr2', 100);
console.log(arr2);

let str = arr2.join(' -- ');
console.log(str);

arr.push('novo', 'item');
console.log(arr);

let ultimoItem = arr.pop();
console.log(ultimoItem);
console.log(arr);

let primeiroItem = arr.shift();
console.log(typeof primeiroItem);

arr.unshift(true, false, 'unshift')
console.log(arr);

numeros.shift();
let somaDeArr = numeros.reduce(function(anterior, atual, i){
    console.log('anterior', anterior, '  |  atual', atual, '  |  i', i)
    return anterior + atual + i;
}, 10);
console.log(numeros);
console.log(somaDeArr);    

let testeReduce = ['1', '2', '3', '4', '5'].reduceRight(function(i, a){
    return i + a;
});
console.log(testeReduce);

let arr = [10,20,30];
arr.reverse()
console.log(arr);

console.log(arr2.slice(2,5));

console.log('------')
console.log(arr2)
let arr3 = arr2.splice(2, 3, 'limao', 'melao');
console.log(arr2);            
console.log(arr3);


//CONCAT
var animals=['eagle','parrot','monkey','boar', 'lion']
var comingSoonAnimals=['panter', 'dragon','turtle']
var allanimals=animals.concat(comingSoonAnimals);
console.log(allanimals)


//Menor a Mayor
var arr=[4,6,1,0,8,2]
arr.sort(function(a,b){
    return a-b
})
console.log(arr)



//Agregar elemento
var animals=['eagle','parrot','monkey','boar', 'lion']
animals.push('cow')
console.log(animals)
 



//ELIMINAR ELEMENTO
var animals=['eagle','parrot','monkey','boar', 'lion']
animals.shift()
console.log(animals)
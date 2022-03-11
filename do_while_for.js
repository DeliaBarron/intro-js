var numero=Number(prompt("Dame el número maximo:"))
var i=1
while(i<=numero){
    if(i%5===0){
        console.log(i, "es multiplo de 5");
    }
    i++
}
  

DO_WHILE
var numero=Number(prompt("Dame el número maximo:"))
var i=1
do{
    if(i%5===0){
         console.log(i, "es multiplo de 5");
    }
    i++
}while(i<=numero)



for(var i=1; i<=50; i++){
    if(i %2!==0){
        console.log(`${i} es impar`)
    }
}


FOR
var numeroImpar= 0
for(var i=1; i<=50; i++){
    if(i %2!==0){
        console.log(i, "es numero impar")
        numeroImpar= numeroImpar+1
    }
}
console.log("hay", numeroImpar, "numeros impares")
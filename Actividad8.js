// 1.BUSCAR PALABRA
    function buscarPalabra(oracion){

        if (oracion.includes('Delia')){
            console.log(true)
        }else{
            console.log(false)
        }

    }buscarPalabra('hola soy Delia')


    


// 2.SUMA DE ELEMTOS DE UN ARREGLO
var numbers=[1, 2, 3, 4, 10, 11]
function sumar (){
  var resultado=0
   for(var i=0 ; i<6;i++){
    resultado+=numbers[i]
    }
return resultado
}sumar()


// 3.PALINDROMO
var palabra1= 'madam'
var palabra2='computadora'
function palindromo (palabra){
    if(palabra==palabra1 || palabra==palabra2){
        console.log(true)
    }else{
        console.log(false)
    }

}palindromo('madam')




// 4.CONVERSION TEMPERATURA
function FahCel (temperatura, str){
    var resultado=0
  
    if(str.includes('C')){
        resultado=(temperatura*1.8)+32
    }else if(str.includes('F')){
        resultado=(temperatura-32)*0.556
    }
    return resultado
}FahCel(0,'C')
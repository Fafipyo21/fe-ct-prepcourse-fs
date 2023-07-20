/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arregloNuevo = [];
   for (let prop in objeto) {
      arregloNuevo.push([prop, objeto[prop]]);
   }
   return arregloNuevo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objetoReturn = {};
   var arrayString = string.split('').sort();
   for(i=0 ; i<arrayString.length ; i++){
      if(objetoReturn[arrayString[i]]){
         objetoReturn[arrayString[i]] += 1;
      }else{objetoReturn[arrayString[i]] = 1}
   }return objetoReturn;
  }

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let uppercase = '';
  let lowercase = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      uppercase += string[i];
    } else {
      lowercase += string[i];
    }
  }
  return uppercase + lowercase;
  }
  



function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   
   var desglosar = frase.split('').reverse().join('').split(' ').reverse().join(' ')

   return desglosar
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var revertido = numero.toString().split('').reverse().join('');
   if (numero == revertido){
      return 'Es capicua'}
      else{
         return 'No es capicua'
      }
   }


function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   nuest = string.replace('a', '').replace('b','')
   res = nuest.replace('c','')
   return res
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   
   for (var i = 0; i < arrayOfStrings.length-1; i++) {
      var siguiente;
      for (var j =0; j < arrayOfStrings.length-1; j++) {
         if(arrayOfStrings[j].length>arrayOfStrings[j+1].length){
            siguiente=arrayOfStrings[j+1];
            arrayOfStrings[j+1]=arrayOfStrings[j]
            arrayOfStrings[j]=siguiente
         }
      }
}return arrayOfStrings}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   return array1.filter((num) => array2.includes(num));
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

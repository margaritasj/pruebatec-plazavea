/* -------------- Solucion del primer ejercicio -------------- */

/* La variable begin sera una constante que tendra como valor una función de flecha */
const begin = () => {
  /* -------------- Declaración de varibles -------------- */
  // arreglo del primer ejercicio
  const arrayOfNumbers = [13, 42, 565, 1, 26, 75];

  // Llamada de elementos del DOM
  let resultElement = document.getElementById('result');
  let oddGreaterNumber = document.getElementById('odd-greater-number');
  let minNumberArr = document.getElementById('min-number');
  let maxNumberArr = document.getElementById('max-number');

  // Funcion para hallar el número mayor impar del arreglo
  const oddGreater = () => {
    let max = 0;
    const numberImpar = arrayOfNumbers.filter(n => n % 2 !== 0);
    console.log(numberImpar);
    // El for para la  busqueda del número mayor en el arreglo
    for (let i = 0; i < numberImpar.length; i++) {
      if (max < numberImpar[i]) {
        max = numberImpar[i];
      }
    }
    // console.log(max);
    resultElement.innerHTML = max;
  };

  // Funcion para hallar el número menor del arreglo
  const minNumber = () => {
    var min = arrayOfNumbers[0];
    // El for hara un recorrido por cada elemeto del arreglo y con la condicional if se hara la busqueda del numero menor
    for (let i = 0; i < arrayOfNumbers.length; i++) {
      if (min > arrayOfNumbers[i]) {
        min = arrayOfNumbers[i];
      }
    }
    // console.log(min);
    resultElement.innerHTML = min;
  };

  // Función para hallar el segundo número mayor del arreglo
  const maxSecondNumber = () => {
    let max = arrayOfNumbers[0];
    let maxSecond = arrayOfNumbers[1];

    // El for para la  busqueda del numero mayor en el arreglo
    for (let i = 0; i < arrayOfNumbers.length; i++) {
      if (max < arrayOfNumbers[i]) {
        max = arrayOfNumbers[i];
      }
    }
    // El for para la  busqueda del segundo numero mayor en el arreglo
    for (let j = 0; j < arrayOfNumbers.length; j++) {
      if (arrayOfNumbers[j] !== max && arrayOfNumbers[j] > maxSecond) {
        maxSecond = arrayOfNumbers[j];
      }
    }
    resultElement.innerHTML = maxSecond;
  };

  // Asociamos el event listener click con el elemento raíz correspondiente.
  oddGreaterNumber.addEventListener('click', oddGreater);
  minNumberArr.addEventListener('click', minNumber);
  maxNumberArr.addEventListener('click', maxSecondNumber);
};

/* El evento load se dispara al final de la ejecución de la función begin y 
    realiza el proceso de carga del documento en objetos denominado tambien DOM*/
window.addEventListener('load', begin);
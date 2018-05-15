/* La variable begin sera una constante que tendra como valor una función de flecha */
const begin = () => {
  /* -------------- Declaración de varibles -------------- */
  // arreglo del primer ejercicio
  const arrayOfNumbers = [13, 42, 565, 1, 26, 75];
  // Llamada de elementos del DOM
  let firstSolution = document.getElementById('solution-one'); 
  let secondSolution = document.getElementById('solution-two');

  let oddGreaterNumber = document.getElementById('odd-greater-number');
  let minNumber = document.getElementById('min-number');
  let maxNumber = document.getElementById('max-number');
 
  // Controlador de eventos: firstHandler y secondHandler son funciones raices 
  const firstHandler = () => {
    oddGreaterNumber.textContent = oddGreaterNumber(arrayOfNumbers);
    minNumber.textContent = minNumber(arrayOfNumbers);
    maxNumber.textContent = maxNumber(arrayOfNumbers);
  };

  const secondHandler = () => {

  };

  // Asociamos el event listener click con el elemento raíz correspondiente.
  firstSolution.addEventListener('click', firstHandler);
  secondSolution.addEventListener('click', secondHandler);
};

/* El evento load se dispara al final de la ejecución de la función begin y 
    realiza el proceso de carga del documento en objetos denominado tambien DOM*/
window.addEventListener('load', begin);
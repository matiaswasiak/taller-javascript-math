function esPar(lista) {
  return !(lista.length % 2);
}

function esImpar(lista) {
  return lista.length % 2;
}

// function calcularMediana(lista) {
//   let mediana;
//   lista.sort((a, b) => a - b);
//   if (esPar(lista)) {
//     const elemento1 = lista[lista.length / 2 - 1];
//     const elemento2 = lista[lista.length / 2];
//     mediana = (elemento1 + elemento2) / 2;
//   } else {
//     mediana = lista[Math.floor(lista.length / 2)];
//   }
//   return mediana;
// }

function calcularMediana(lista) {
  const listaEsPar = esPar(lista);

  if (listaEsPar) {
    const indexMitad1ListaPar = lista.length / 2 - 1;
    const indexMitad2ListaPar = lista.length / 2;

    calcularPromedio([lista[indexMitad1ListaPar], lista[indexMitad2ListaPar]]);
  } else {
    const indexMitadListaImpar = Math.floor(lista.length / 2);
    const mediana = lista[indexMitadListaImpar];
    return mediana;
  }
}

// Function that calculate the average of a list
function calcularPromedio(array) {
  // sumar todos los elementos del array / cantidad de elementos
  // let sumaArray = 0;
  // for (let i = 0; i < array.length; i++) {
  // sumaArray += array[i];
  // }

  const sumaLista = array.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  // const sumaListArrow = array.reduce(
  //   (valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento
  // );

  const promedio = sumaLista / array.length;
  console.log(promedio);
}

// Function that check if the array is even
function arrayIsEven(array) {
  return array.length % 2 === 0;
}

const arrayIsEvenArrow = (array) => array.length % 2 === 0;

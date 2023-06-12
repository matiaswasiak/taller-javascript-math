const PlatziMath = {};

PlatziMath.esPar = function esPar(lista) {
  return !(lista.length % 2);
};

PlatziMath.esImpar = function esImpar(lista) {
  return lista.length % 2;
};

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

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) {
  const lista = PlatziMath.ordenarLista(listaDesordenada);
  const listaEsPar = PlatziMath.esPar(lista);

  if (listaEsPar) {
    const indexMitad1ListaPar = lista.length / 2 - 1;
    const indexMitad2ListaPar = lista.length / 2;

    PlatziMath.calcularPromedio([
      lista[indexMitad1ListaPar],
      lista[indexMitad2ListaPar],
    ]);
  } else {
    const indexMitadListaImpar = Math.floor(lista.length / 2);
    const mediana = lista[indexMitadListaImpar];
    return mediana;
  }
};

// Function that calculate the average of a list
PlatziMath.calcularPromedio = function calcularPromedio(array) {
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
};

// Function that check if the array is even
PlatziMath.arrayIsEven = function arrayIsEven(array) {
  return array.length % 2 === 0;
};

// const arrayIsEvenArrow = (array) => array.length % 2 === 0;

// function ordenarLista(listaDesordenada) {
//   function ordenarListaSort(valorAcumulado, nuevoValor) {
//     if (valorAcumulado > nuevoValor) {
//       return 1;
//     } else if (valorAcumulado == nuevoValor) {
//       return 0;
//     } else {
//       return -1;
//     }
//   }

//   const lista = listaDesordenada.sort(ordenarListaSort);

//   return lista;
// }

PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
  return listaDesordenada.sort((a, b) => a - b);
};

PlatziMath.obtenerModa = function obtenerModa(lista) {
  const listaCount = {};

  lista.map((elemento) => {
    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  });

  const listaArray = Object.entries(listaCount).sort((a, b) => a[1] - b[1]);

  const moda = listaArray[listaArray.length - 1];

  return moda;
};

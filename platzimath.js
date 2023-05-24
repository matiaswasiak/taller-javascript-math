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

function arrayIsEven(array) {
  return array.length % 2 === 0;
}

const arrayIsEvenArrow = (array) => array.length % 2 === 0;

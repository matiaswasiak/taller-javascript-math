function calcularPromedio(array) {
  // sumar todos los elementos del array / cantidad de elementos
  let sumaArray = 0;

  for (let i = 0; i < array.length; i++) {
    sumaArray += array[i];
  }

  const promedio = sumaArray / array.length;
  console.log(promedio);
}

// Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

function calcularCuadrado(lado) {
  const perimetro = lado * 4;
  const area = lado * lado;
  return { perimetro, area };
}

console.log({ ladoCuadrado, perimetroCuadrado, areaCuadrado });
console.groupEnd("Cuadrados");

// Código del triángulo
console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
  const perimetro = lado1 + lado2 + base;
  const area = (base * altura) / 2;
  return { perimetro, area };
}

console.log({
  ladoTriangulo1,
  ladoTriangulo2,
  baseTriangulo,
  alturaTriangulo,
  perimetroTriangulo,
  areaTriangulo,
});
console.groupEnd("Triángulos");

// Análisis personal para Juanita
function encontrarPersona(personaEnBusqueda) {
  return salarios.find((persona) => persona.name === personaEnBusqueda);
}

function medianaPorPersona(nombrePersona) {
  const persona = encontrarPersona(nombrePersona);
  const salariosPersona = persona.trabajos.map((trabajo) => trabajo.salario);
  return PlatziMath.calcularMediana(salariosPersona);
}

function proyeccionPorPersona(nombrePersona) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;

  let porcentajesCrecimiento = [];

  for (let i = 1; i < trabajos.length; i++) {
    const salarioActual = trabajos[i].salario;
    const salarioPasado = trabajos[i - 1].salario;
    const crecimiento = salarioActual - salarioPasado;
    const porcentajeCrecimiento = (crecimiento / salarioPasado) * 100;
    porcentajesCrecimiento.push(porcentajeCrecimiento);
  }

  const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(
    porcentajesCrecimiento
  );

  const ultimoSalario = trabajos[trabajos.length - 1].salario;
  const aumentoSalario = ultimoSalario * (medianaPorcentajesCrecimiento / 100);
  const proyeccion = ultimoSalario + aumentoSalario;

  return proyeccion;
}

const empresas = {};

for (persona of salarios) {
  for (trabajo of persona.trabajos) {
    if (!empresas[trabajo.empresa]) {
      empresas[trabajo.empresa] = [];
    }

    if (!empresas[trabajo.empresa][trabajo.year]) {
      empresas[trabajo.empresa][trabajo.year] = [];
    }

    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
  }
}

console.log({ empresas });

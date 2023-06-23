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

function medianaEmpresaYear(empresa, year) {
  if (!empresas[empresa]) {
    console.warn(`No existe la empresa ${empresa}`);
  } else if (!empresas[empresa][year]) {
    console.warn(`No existe la empresa ${empresa} en el año ${year}`);
  } else {
    PlatziMath.calcularMediana(empresas[empresa][year]);
  }
}

function proyeccionPorEmpresa(nombre) {
  if (!empresas[nombre]) {
    console.warn(`No existe la empresa ${nombre}`);
  } else {
    const empresaYears = Object.keys(empresas[nombre]);
    const listaMedianaYears = empresaYears.map((year) => {
      return medianaEmpresaYear(nombre, year);
    });

    let porcentajesCrecimiento = [];

    for (let i = 1; i < listaMedianaYears.length; i++) {
      const salarioActual = listaMedianaYears[i];
      const salarioPasado = listaMedianaYears[i - 1];
      const crecimiento = salarioActual - salarioPasado;
      const porcentajeCrecimiento = (crecimiento / salarioPasado) * 100;
      porcentajesCrecimiento.push(porcentajeCrecimiento);
    }

    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(
      porcentajesCrecimiento
    );

    const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
    const aumentoSalario =
      ultimaMediana * (medianaPorcentajesCrecimiento / 100);
    const nuevaMediana = ultimaMediana + aumentoSalario;

    return nuevaMediana;
  }
}

// Analisis de top 10% de salarios
function medianaGeneral() {
  const listaMedianas = salarios.map((persona) =>
    medianaPorPersona(persona.name)
  );
  console.log({ nombres });

  const mediana = PlatziMath.calcularMediana(listaMedianas);

  return mediana;
}

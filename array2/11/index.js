const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
  ];

  const filtroLetraInicial = (nomes) => {
    const resultado = nomes.filter((nome) => {
        return nome.slice(0, 1).toLowerCase() === 'a' 
    })
    console.log(resultado)
  }

  filtroLetraInicial(nomes)
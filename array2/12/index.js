const pessoas = [
    {
      nome: "Antonio",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Maria",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Ana",
      idade: 21,
      profissao: "Programador",
    },
    {
      nome: "Beatriz",
      idade: 20,
      profissao: "Programador",
    },
    {
      nome: "José",
      idade: 32,
      profissao: "Jornalista",
    },
    {
      nome: "Marcos",
      idade: 30,
      profissao: "Programador",
    },
  ];

  const filtrandoPorProfissaoIdade = (pessoas) => {
    const resultado1 = pessoas.filter((pessoa) => {
        return pessoa.profissao === 'Programador' && pessoa.idade > 20
        })
        
    const resultado2 = pessoas.filter((pessoa) => {
        return pessoa.profissao === 'Jornalista' && pessoa.idade > 30
        })
        
    const resultado3 = pessoas.filter((pessoa) => {
        return pessoa.idade < 29
         })

         console.log(resultado1)
         console.log(resultado2)
         console.log(resultado3)
  }

  filtrandoPorProfissaoIdade(pessoas)
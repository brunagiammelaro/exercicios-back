const endereços = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
  ];

const encontrarEndereco = (enderecos, cep) => {
    const resultado = enderecos.find((endereco) => {
        return endereco.cep === cep
    })
    console.log(`${resultado.rua}`)
}

encontrarEndereco(endereços, 11222333)
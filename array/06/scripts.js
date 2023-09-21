const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

function encontrarDono(usuarios, nomeCachorro) {

    for (let i = 0; i < usuarios.length; i++) {
        const indice = usuarios[i]

        if (indice.pets.includes(nomeCachorro)) {
            return `O dono(a) do(a) ${nomeCachorro} é o(a) ${indice.nome}.`
        } 
    }
    return `Que pena ${nomeCachorro}, não encontramos seu dono(a).`
}

console.log(encontrarDono(usuarios, 'Naninha'))
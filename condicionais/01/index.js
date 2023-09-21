const jogada1 = "papel"
const jogada2 = "pedra"

if (jogada1 === jogada2) {
    console.log("Empate")
} else if (jogada1 === "pedra" || jogada2 === "pedra") {
    console.log("Pedra") 
} else if (jogada1 === "tesoura" || jogada2 === "tesoura") {
    console.log("Tesoura")
} 
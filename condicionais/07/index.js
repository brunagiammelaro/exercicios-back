const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; 

if (aposentada || portadoraDeDoenca) {
    console.log("ISENTA");
} else if (totalDeRendimentos <= 2855970) {
    console.log("VAZA LEÃO! JA TÁ DIFÍCIL SEM VOCÊ");
} else {
    console.log("PEGA LEÃO");
}
const nota = 10;

if (nota >= 9) {
    console.log("O estudante obteve o conceito A");
} else if (nota >= 8 && nota <= 8.9) {
    console.log("O estudante obteve o conceito B");
} else if (nota >= 6 && nota <= 7.9) {
    console.log("O estudante obteve o conceito C");
} else if (nota >= 4 && nota <= 5.9) {
    console.log("O estudante obteve o conceito D");
} else if (nota <= 4) {
    console.log("O estudante obteve o conceito E");
}
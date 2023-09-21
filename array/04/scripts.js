const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function filaPacientes(lista, tipo, paciente) {
    
    if (tipo === 'agendar') {
        let pessoa = lista.push(paciente)
        pessoa = lista.shift()
        console.log(lista.join(", "))
    }else if (tipo === 'atender') {
        const remover = lista.shift()
        console.log(lista.join(", "))
        return remover
    }
}

filaPacientes(pacientes, 'atender', 'Pedro')
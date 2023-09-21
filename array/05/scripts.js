const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function filaPacientes(lista, tipo, paciente) {
        if (tipo === 'agendar') {
        agendarPaciente(lista, paciente);
    }else if (tipo === 'atender') {
        atenderPaciente(lista);
    }
}

//a) Crie uma função agendarPaciente que será exclusiva para agendamentos. Ela deverá receber como argumento da função o array de pacientes e o paciente a ser agendado. A função deverá adicionar ao final da fila o paciente informado como argumento.

function agendarPaciente(lista, paciente) {
    const indiceAgendamento = lista.indexOf(paciente)
    lista.splice(indiceAgendamento, 1)
    lista.push(paciente)
        
    console.log(lista.join(", "))
}
//b) Crie uma função atenderPaciente que será exclusiva para atendimentos. Ela deverá receber o array de pacientes e sua função é remover o paciente atendido da fila. Os pacientes são atendidos por ordem na fila.

function atenderPaciente(lista) {
    lista.shift()
    console.log(lista.join(", "))
}
//c) Crie uma função cancelarAtendimento que receberá o array de pacientes e o paciente que deseja cancelar o antendimento. A função deverá remover o paciente que deseja cancelar da fila de atendimento.

function cancelarAtendimento(lista, pacienteCancelar) {
    const indiceCancelamento = lista.indexOf(pacienteCancelar)
    lista.splice(indiceCancelamento, 1)
    console.log(lista.join(", "))
}
    

agendarPaciente(pacientes, 'José')
atenderPaciente(pacientes)
cancelarAtendimento(pacientes, 'Bárbara')
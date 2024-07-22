const botao = document.querySelector('.botao-tarefa')
const inputTarefa = document.querySelector('.input-tarefa')
const ListaCompleta = document.querySelector('.lista-tarefas')

let ListaDeTarefas = []



function adicionarTarefa() {
    ListaDeTarefas.push({
        tarefa: inputTarefa.value,
        concluida: false
    })

    inputTarefa.value = ''
    exibirTarefas()
}

function exibirTarefas() {

    let novaTarefa = ''

    ListaDeTarefas.forEach((item, posicao) => {
        novaTarefa = novaTarefa + `  <li class="tarefa ${item.concluida && "done"}">
                            <img src="./img/checked.png" alt="tarefa concluída" onclick="concluirTarefa(${posicao})">
                            <p>${item.tarefa}</p>
                            <img src="./img/trash.png" alt="excluir tarefa" onclick="deletarTarefa(${posicao})">
                        </li>`
    })

    ListaCompleta.innerHTML = novaTarefa

    localStorage.setItem('lista', JSON.stringify(ListaDeTarefas))

}

function concluirTarefa(posicao) {
    ListaDeTarefas[posicao].concluida = !ListaDeTarefas[posicao].concluida

    exibirTarefas()
}

function deletarTarefa(posicao) {
    ListaDeTarefas.splice(posicao, 1)
    console.log(posicao)

    exibirTarefas()

}

function adicionarAoLocalStorage() {
    const tarefasSalvas = localStorage.getItem('lista')
    
    if(tarefasSalvas){ListaDeTarefas = JSON.parse(tarefasSalvas)
    }
    
    exibirTarefas()
}

adicionarAoLocalStorage()

botao.addEventListener('click', adicionarTarefa)


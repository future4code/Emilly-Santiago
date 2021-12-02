const tarefas = ["Lavar a louça", "Comprar Leite"];

const novaTarefa = process.argv[2]

novaTarefa && tarefas.push(novaTarefa)
console.table(tarefas)
console.log("\033[31m Aqui esta o texto em vermelho.");
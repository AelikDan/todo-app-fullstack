// Interface representativa da estrutura de dados de uma tarefas no sistema

export interface ITodoItem {
    _id: string;
    title: string;
    completed: boolean;
    createAt: string;
}

// Elemento de Criação para uma nova Tarefa
export interface ICreateTodoDTO{
    title: string;
}

//interfa
export interface IUpdateTodoDTO{
    title?: string;
    completed?: boolean;
}


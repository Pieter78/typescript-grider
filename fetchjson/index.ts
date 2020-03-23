import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
  id: number
  title: string
  completed: boolean
}

axios.get(url).then(response => {
  const todo = response.data as Todo

  logTodo(todo)
})

const logTodo = ({ id, title, completed }: Todo) =>
  console.log(`
    ID: ${id} 
    Title: ${title}
    Finished: ${completed}
  `)

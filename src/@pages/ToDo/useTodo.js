import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const createApiUrl = "https://www.pre-onboarding-selection-task.shop/todos"

const httpRequestHeader = {
  headers: {
    Authorization: `Bearer ${localStorage.access_token}`,
    "Content-Type": "application/json",
  },
}

const useTodo = () => {
  const [todo, setTodo] = useState({
    addTodo: "",
  })
  const [todos, setTodos] = useState([])
  const [isEdit, setIsEdit] = useState(false)
  const [newTodo, setNewTodo] = useState("")
  const [editTodoId, setEditTodoId] = useState(null)
  const navigate = useNavigate()

  /* ------------------------------- axios CRUD ------------------------------- */
  const getTodos = async () => {
    try {
      const { data } = await axios.get(createApiUrl, httpRequestHeader)
      setTodos(data)
    } catch (error) {
      console.error(`Error in getTodos: ${error.message}`)
    }
  }

  const onSubmitPostTodo = async (todo) => {
    const requestBody = {
      todo: todo.addTodo,
    }
    try {
      const response = await axios.post(
        createApiUrl,
        requestBody,
        httpRequestHeader,
      )
      setTodos((todo) => [...todo, response.data])
    } catch (error) {
      console.error(`Error in onSubmitPostTodo: ${error.message}`)
    }
  }

  const updateTodos = async (todoId, newTodo, isCompleted) => {
    try {
      const updatedTodo = {
        id: todoId,
        todo: newTodo,
        isCompleted: isCompleted,
      }
      const { data } = await axios.put(
        `https://www.pre-onboarding-selection-task.shop/todos/${todoId}`,
        updatedTodo,
        httpRequestHeader,
      )
      return data
    } catch (error) {
      console.error(`Error in updateTodos: ${error.message}`)
    }
  }

  const onClickDeleteTodo = async (todoId) => {
    try {
      const response = await axios.delete(
        `https://www.pre-onboarding-selection-task.shop/todos/${todoId}`,
        httpRequestHeader,
      )
      const newTodos = todos.filter((todo) => {
        return todo.id !== todoId
      })
      setTodos(newTodos)
      console.log(response.status)
      alert("삭제 되었습니다")
    } catch (error) {
      console.error(`Error in onClickDeleteTodo: ${error.message}`)
    }
  }

  /* --------------------------------- handler -------------------------------- */
  const onChangeIsCompleted = async (todoId, newTodo, isCompleted) => {
    const foundTodo = todos.find((todo) => todo.id === todoId)

    await updateTodos(foundTodo.id, newTodo, isCompleted)

    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === foundTodo.id
          ? { ...todo, todo: newTodo, isCompleted }
          : todo,
      ),
    )
    setEditTodoId(null)
  }

  const onSubmitEditTodoList = async (e) => {
    e.preventDefault()
    const foundTodo = todos.find((todo) => todo.id === editTodoId)

    await updateTodos(foundTodo.id, newTodo, foundTodo.isCompleted)

    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === foundTodo.id ? { ...todo, todo: newTodo } : todo,
      ),
    )

    setEditTodoId(null)
  }

  const onClickAddTodoList = (e) => {
    const { value } = e.target
    setTodo({
      ...todo,
      addTodo: value,
    })
  }

  const onClickEditTodoList = (todoId) => {
    setEditTodoId(todoId)

    const foundTodo = todos.find((todo) => todo.id === todoId)
    setNewTodo(foundTodo.todo)
    setIsEdit(!isEdit)
  }

  const onClickCancelEdit = () => {
    setEditTodoId(null)
  }

  const resetInputValue = () => {
    setTodo({
      ...todo,
      addTodo: "",
    })
  }

  /* ----------------------------------- --- ---------------------------------- */
  useEffect(() => {
    ;(async () => await getTodos())()
  }, [])

  useEffect(() => {
    if (!localStorage.access_token) {
      alert("로그인 한 회원만 접근할 수 있습니다😓")
      navigate("/signin")
    } else {
      getTodos()
    }
  }, [navigate])
  /* ----------------------------------- --- ---------------------------------- */
  return {
    todo,
    todos,
    isEdit,
    newTodo,
    editTodoId,
    setNewTodo,
    navigate,
    getTodos,
    onSubmitPostTodo,
    updateTodos,
    onClickDeleteTodo,
    onChangeIsCompleted,
    onClickAddTodoList,
    onClickEditTodoList,
    onSubmitEditTodoList,
    onClickCancelEdit,
    resetInputValue,
  }
}

export default useTodo

import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const createApiUrl = "https://www.pre-onboarding-selection-task.shop/todos"

const httpRequestHeader = {
  headers: {
    Authorization: `Bearer ${localStorage.JWT}`,
    "Content-Type": "application/json",
  },
}

function Todo() {
  const [todo, setTodo] = useState({
    title: "",
  })
  const [todos, setTodos] = useState([])

  const [isEdit, setIsEdit] = useState(false)
  const [newTodo, setNewTodo] = useState("")
  const [editTodoId, setEditTodoId] = useState(null)

  const navigate = useNavigate()

  const fetchTodos = async () => {
    try {
      const { data } = await axios.get(createApiUrl, httpRequestHeader)
      // setTodos((prevTodos) => prevTodos.map((prevTodo) => ({ ...prevTodo })))
      setTodos(data)
      // debugger
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmitHandler = async (todo) => {
    const requestBody = {
      todo: todo.title,
    }

    try {
      const response = await axios.post(
        createApiUrl,
        requestBody,
        httpRequestHeader,
      )

      console.log("Request,url:", response.config.url)
      console.log("Request,method:", response.config.method)
      console.log("Request,headers:", response.config.headers)
      console.log("Response,status:", response.status)
      console.log("Response,body:", response.data)

      setTodos((prev) => [...prev, response.data])
      // await fetchTodos()
      setTodo({ title: "" })
      console.log(todo)
    } catch (error) {
      console.log(error)
    }
  }

  const updateTodo = async (todoId, newTodo, isCompleted) => {
    try {
      const updatedTodo = {
        id: todoId,
        todo: newTodo,
        isCompleted: true,
      }
      const { data } = await axios.put(
        `https://www.pre-onboarding-selection-task.shop/todos/${todoId}`,
        updatedTodo,
        httpRequestHeader,
      )
      console.log(data)
      return data // 수정된 데이터를 반환합니다.
    } catch (error) {
      console.log(error)
    }
  }

  const onClickDeleteButtonHandler = async (todoId) => {
    try {
      const response = await axios.delete(
        `https://www.pre-onboarding-selection-task.shop/todos/${todoId}`,
        httpRequestHeader,
      )
      console.log("Request,url:", response.config.url)
      console.log("Request,body:", response.data)
      console.log("Response,status:", response.status)
      console.log("Response,body:", response.data)

      const newTodos = todos.filter((todo) => {
        return todo.id !== todoId
      })
      setTodos(newTodos)
    } catch (error) {
      console.log(error)
    }
  }

  const toggleEdit = (todoId) => {
    setEditTodoId(todoId)
    console.log(editTodoId)

    const foundTodo = todos.find((todo) => todo.id === todoId)
    setNewTodo(foundTodo.todo)
    setIsEdit(!isEdit)
  }

  const onSubmitEditHandler = async (event) => {
    event.preventDefault()
    if (newTodo.trim() === "") return
    const foundTodo = todos.find((todo) => todo.id === editTodoId)
    await updateTodo(foundTodo.id, newTodo, foundTodo.isCompleted)
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === foundTodo.id ? { ...todo, todo: newTodo } : todo,
      ),
    )
    setIsEdit(null)
    setNewTodo("")
    setEditTodoId(null)
  }

  const cancelEdit = () => {
    // setIsEdit(false)
    // setNewTodo("")
    setEditTodoId(null)
  }

  useEffect(() => {
    ;(async () => await fetchTodos())()
  }, [])

  useEffect(() => {
    if (!localStorage.JWT) {
      alert("로그인하고오세요")
      navigate("/signin")
    } else {
      fetchTodos()
    }
  }, [navigate])

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onSubmitHandler(todo)
        }}
      >
        <input
          id="new-todo-input"
          data-testid="new-todo-input"
          type="text"
          value={todo.title}
          onChange={(event) => {
            const { value } = event.target
            setTodo({
              ...todo,
              title: value,
            })
          }}
        />
        <button data-testid="new-todo-add-button">추가하기</button>
      </form>
      <div>
        {todos?.map((todo, index) => (
          <ul key={index}>
            <li>
              {editTodoId === todo.id ? (
                <form onSubmit={onSubmitEditHandler}>
                  <input type="checkbox" />
                  <input
                    data-testid="modify-input"
                    type="text"
                    value={newTodo}
                    onChange={(event) => setNewTodo(event.target.value)}
                  />
                  <button
                    data-testid="submit-button"
                    type="button"
                    onClick={onSubmitEditHandler}
                  >
                    제출
                  </button>
                  <button
                    data-testid="cancel-button"
                    type="button"
                    onClick={cancelEdit}
                  >
                    취소
                  </button>
                </form>
              ) : (
                <>
                  <label>
                    <input type="checkbox" />
                    <span>{todo.todo}</span>
                  </label>
                  <button
                    data-testid="modify-button"
                    type="button"
                    onClick={() => toggleEdit(todo.id)}
                  >
                    수정하기
                  </button>
                  <button
                    data-testid="delete-button"
                    type="button"
                    onClick={() => onClickDeleteButtonHandler(todo.id)}
                  >
                    삭제하기
                  </button>
                </>
              )}
            </li>
          </ul>
        ))}
      </div>
    </>
  )
}

export default Todo

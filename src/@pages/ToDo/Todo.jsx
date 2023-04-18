import useTodo from "./useTodo"

function Todo() {
  const {
    todo,
    todos,
    newTodo,
    editTodoId,
    setNewTodo,
    onSubmitPostTodo,
    onClickDeleteTodo,
    test,
    onClickAddTodoList,
    onClickEditTodoList,
    onSubmitEditTodoList,
    onClickCancelEdit,
  } = useTodo()

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onSubmitPostTodo(todo)
        }}
      >
        <label>
          <input
            id="new-todo-input"
            data-testid="new-todo-input"
            type="text"
            value={todo.addTodo}
            onChange={(event) => onClickAddTodoList(event)}
          />
        </label>
        <button data-testid="new-todo-add-button">추가하기</button>
      </form>
      <div>
        <ul>
          {todos?.map((todo) =>
            editTodoId === todo.id ? (
              <li key={todo.id}>
                <form onSubmit={onSubmitEditTodoList}>
                  <label>
                    <input
                      type="checkbox"
                      checked={todo.isCompleted}
                      onChange={() =>
                        test(todo.id, todo.todo, !todo.isCompleted)
                      }
                    />
                    <input
                      data-testid="modify-input"
                      type="text"
                      value={newTodo}
                      onChange={(event) => setNewTodo(event.target.value)}
                    />
                  </label>
                  <button
                    data-testid="submit-button"
                    type="button"
                    onClick={onSubmitEditTodoList}
                  >
                    제출
                  </button>
                  <button
                    data-testid="cancel-button"
                    type="button"
                    onClick={onClickCancelEdit}
                  >
                    취소
                  </button>
                </form>
              </li>
            ) : (
              <li key={todo.id}>
                <form
                  onSubmit={() => test(todo.id, todo.todo, !todo.isCompleted)}
                >
                  <label>
                    <input
                      type="checkbox"
                      checked={todo.isCompleted}
                      onChange={() =>
                        test(todo.id, todo.todo, !todo.isCompleted)
                      }
                    />

                    <span>{todo.todo}</span>
                  </label>
                  <button
                    data-testid="modify-button"
                    type="button"
                    onClick={() => onClickEditTodoList(todo.id)}
                  >
                    수정
                  </button>
                  <button
                    data-testid="delete-button"
                    type="button"
                    onClick={() => onClickDeleteTodo(todo.id)}
                  >
                    삭제
                  </button>
                </form>
              </li>
            ),
          )}
        </ul>
      </div>
    </>
  )
}

export default Todo

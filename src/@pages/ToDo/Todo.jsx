import useTodo from "./useTodo"
import styles from "./Todo.module.css"

function Todo() {
  const {
    todo,
    todos,
    newTodo,
    editTodoId,
    setNewTodo,
    onSubmitPostTodo,
    onClickDeleteTodo,
    onChangeIsCompleted,
    onClickAddTodoList,
    onClickEditTodoList,
    onSubmitEditTodoList,
    onClickCancelEdit,
    resetInputValue,
  } = useTodo()

  return (
    <>
      <div className={styles.container}>
        <div className={styles.NewTodoContainer}>
          <div className={styles.title}>TodoList</div>
          <NewTodo
            onSubmit={(e) => {
              e.preventDefault()
              onSubmitPostTodo(todo)
              resetInputValue()
            }}
            todo={todo}
            onChange={(e) => onClickAddTodoList(e)}
          />
        </div>
        <div>
          <ul key={todo.id}>
            {todos?.map((todo) =>
              editTodoId === todo.id ? (
                <SubmitInput
                  todo={todo}
                  newTodo={newTodo}
                  onSubmit={onSubmitEditTodoList}
                  checkboxOnChange={() =>
                    onChangeIsCompleted(todo.id, todo.todo, !todo.isCompleted)
                  }
                  textOnChange={(e) => setNewTodo(e.target.value)}
                  submitOnClick={onSubmitEditTodoList}
                  cancelOnClick={onClickCancelEdit}
                />
              ) : (
                <ModifyInput
                  todo={todo}
                  onSubmit={() =>
                    onChangeIsCompleted(todo.id, todo.todo, !todo.isCompleted)
                  }
                  checkboxOnChange={() =>
                    onChangeIsCompleted(todo.id, todo.todo, !todo.isCompleted)
                  }
                  modifyOnClick={() => onClickEditTodoList(todo.id)}
                  deleteOnClick={() => onClickDeleteTodo(todo.id)}
                />
              ),
            )}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Todo

/* -------------------------------- Add TodoList -------------------------------- */
export const NewTodo = ({ onSubmit, onChange, todo }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        <input
          className={styles.newTodoInput}
          id="new-todo-input"
          data-testid="new-todo-input"
          type="text"
          value={todo.addTodo}
          onChange={onChange}
        />
      </label>
      <button
        className={styles.newTodoButton}
        data-testid="new-todo-add-button"
      >
        추가하기
      </button>
    </form>
  )
}

/* ------------------------ Submit after modifying TodoList ----------------------- */
export const SubmitInput = ({
  todo,
  newTodo,
  onSubmit,
  checkboxOnChange,
  textOnChange,
  submitOnClick,
  cancelOnClick,
}) => {
  return (
    <li className={styles.modifyInputList}>
      <form onSubmit={onSubmit}>
        <label>
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={checkboxOnChange}
          />
          <input
            className={styles.modifyInput}
            data-testid="modify-input"
            type="text"
            value={newTodo}
            onChange={textOnChange}
          />
        </label>
        <button
          className={styles.modifyButton}
          data-testid="submit-button"
          type="button"
          onClick={submitOnClick}
        >
          제출
        </button>
        <button
          className={styles.deleteButton}
          data-testid="cancel-button"
          type="button"
          onClick={cancelOnClick}
        >
          취소
        </button>
      </form>
    </li>
  )
}

/* ----------------------------- Modify TodoList ---------------------------- */
export const ModifyInput = ({
  todo,
  onSubmit,
  checkboxOnChange,
  modifyOnClick,
  deleteOnClick,
}) => {
  return (
    <li className={styles.modifyInputList}>
      <form onSubmit={onSubmit}>
        <label>
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={checkboxOnChange}
          />

          <span>{todo.todo}</span>
        </label>
        <button
          className={styles.modifyButton}
          data-testid="modify-button"
          type="button"
          onClick={modifyOnClick}
        >
          수정
        </button>
        <button
          className={styles.deleteButton}
          data-testid="delete-button"
          type="button"
          onClick={deleteOnClick}
        >
          삭제
        </button>
      </form>
    </li>
  )
}

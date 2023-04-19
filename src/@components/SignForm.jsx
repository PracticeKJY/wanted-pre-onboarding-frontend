import styles from "./SignForm.module.css"

const SignForm = ({ id, type, value, placeholder, onChange }) => {
  return (
    <>
      <label htmlFor={id}>
        <span className={styles.inputTitle}>{type} :</span>
      </label>
      <input
        className={styles.emailInput}
        data-testid={id}
        id={id}
        type={type}
        name={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </>
  )
}

export default SignForm

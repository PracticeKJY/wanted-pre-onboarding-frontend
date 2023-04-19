import styles from "./SignButton.module.css"

const SignButton = ({ children, id, disabled }) => {
  return (
    <button className={styles.SignButton} data-testid={id} disabled={disabled}>
      {children}
    </button>
  )
}

export default SignButton

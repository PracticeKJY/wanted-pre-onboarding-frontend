const SignButton = ({ children, id, disabled }) => {
  return (
    <button data-testid={id} disabled={disabled}>
      {children}
    </button>
  )
}

export default SignButton

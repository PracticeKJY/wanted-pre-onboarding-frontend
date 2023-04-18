const SignForm = ({ id, type, value, placeholder, onChange }) => {
  return (
    <>
      <label htmlFor={id}>{type}:</label>
      <input
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

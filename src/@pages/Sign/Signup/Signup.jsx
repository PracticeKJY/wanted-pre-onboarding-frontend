import useSignup from "./useSignup"
import SignForm from "../../../@components/SignForm"
import SignButton from "../../../@components/SignButton"

function Signup() {
  const {
    emailAddress,
    passWord,
    submit,
    disable,
    handleChangeEmailAddress,
    handleChangePassword,
    onSubmit,
  } = useSignup()

  return (
    <>
      {submit ? (
        <div>회원가입 중😀</div>
      ) : (
        <div>
          <div style={{ padding: "20px 0 ", fontWeight: 600 }}>Signup</div>
          <form onSubmit={onSubmit}>
            <SignForm
              id="email-input"
              type="email"
              value={emailAddress}
              placeholder="Iwant@pass.com"
              onChange={handleChangeEmailAddress}
            />
            <SignForm
              id="password-input"
              type="password"
              value={passWord}
              placeholder="********"
              onChange={handleChangePassword}
            />
            <SignButton
              id="signup-button"
              disabled={disable}
              children="회원가입"
            />
          </form>
        </div>
      )}
    </>
  )
}

export default Signup

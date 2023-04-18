import useSignin from "./useSignin"
import SignForm from "../../../@components/SignForm"
import SignButton from "../../../@components/SignButton"

function Signin() {
  const {
    emailAddress,
    passWord,
    submit,
    disable,
    handleChangeEmailAddress,
    handleChangePassword,
    onSubmit,
  } = useSignin()
  return (
    <>
      {submit ? (
        <div>로그인 중😀</div>
      ) : (
        <div>
          <div style={{ padding: "20px 0 ", fontWeight: 600 }}>Signin</div>
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
              id="signin-button"
              disabled={disable}
              children="로그인"
            />
          </form>
        </div>
      )}
    </>
  )
}

export default Signin

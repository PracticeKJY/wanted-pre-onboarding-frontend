import useSignin from "./useSignin"
import SignForm from "../../../@components/SignForm"
import SignButton from "../../../@components/SignButton"
import styles from "../Signup/Signup.module.css"
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
          <div className={styles.signTitle}>Signin</div>
          <div className={styles.signFormContainer}>
            <form onSubmit={onSubmit} className={styles.form}>
              <div className={styles.inputContainer}>
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
              </div>
              <SignButton
                id="signin-button"
                disabled={disable}
                children="로그인"
              />
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Signin

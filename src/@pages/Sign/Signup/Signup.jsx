import useSignup from "./useSignup"
import SignForm from "../../../@components/SignForm"
import SignButton from "../../../@components/SignButton"
import styles from "./Signup.module.css"

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
          <div className={styles.signTitle}>Signup</div>
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
                id="signup-button"
                disabled={disable}
                children="회원가입"
              />
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Signup

import { useNavigate } from "react-router-dom"
import styles from "./Home.module.css"
const Home = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate("/signup")
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>홈화면 입니다🏡</h1>
      <div className={styles.homeText}>
        (아래의 버튼을 통해 회원가입 페이지로 이동해주세요)
      </div>
      <button className={styles.moveSignupPageButton} onClick={onClick}>
        회원 가입 페이지로 이동👉
      </button>
    </div>
  )
}

export default Home

import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate("/signup")
  }

  return (
    <div>
      <h1>홈🏡</h1>
      <button style={{ border: "none", margin: "10px" }} onClick={onClick}>
        회원 가입 페이지로 이동👉
      </button>
    </div>
  )
}

export default Home

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

//이걸 마감2일전에 알아서 시간은없고 손수테스트할때마다 로컬스트리지 삭제할 수 없으니까 만든 테스트용 로그아웃페이지
function Logout() {
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.removeItem("JWT")
    navigate("/signin")
  }, [navigate])

  return <div>로그아웃 중...</div>
}

export default Logout

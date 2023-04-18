import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const apiUrl = "https://www.pre-onboarding-selection-task.shop/auth/signup"
const httpRequestHeader = {
  headers: {
    "Content-Type": "application/json",
  },
}

const useSignup = () => {
  const navigate = useNavigate()
  const [emailAddress, setEmailAddress] = useState("")
  const [passWord, setPassword] = useState("")
  const emailPasswordData = { email: emailAddress, password: passWord }
  const [submit, setSubmit] = useState(false)
  const [disable, setDisable] = useState(true)

  const handleChangeEmailAddress = (e) => {
    e.preventDefault()
    const { value } = e.target
    setEmailAddress(value)
  }

  const handleChangePassword = (e) => {
    e.preventDefault()
    const { value } = e.target
    setPassword(value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      setSubmit(true)
      const response = await axios.post(
        apiUrl,
        emailPasswordData,
        httpRequestHeader,
      )
      alert("고객님, 회원이 되신걸 축하드립니다! 🎉")
      console.log(response.status)
      navigate("/signin")
    } catch (error) {
      alert(error.response.data.message)
    } finally {
      setSubmit(false)
    }
  }

  useEffect(() => {
    if (emailAddress.includes("@") && passWord.length >= 8) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }, [emailAddress, passWord])

  useEffect(() => {
    const accessToken = localStorage.getItem("JWT")
    if (accessToken) {
      alert("이미 로그인이 되어있으시네요?🤔")
      navigate("/todos")
    }
  }, [navigate])

  return {
    emailAddress,
    passWord,
    submit,
    disable,
    handleChangeEmailAddress,
    handleChangePassword,
    onSubmit,
  }
}

export default useSignup

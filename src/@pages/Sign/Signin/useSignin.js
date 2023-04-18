import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const apiUrl = "https://www.pre-onboarding-selection-task.shop/auth/signin"

const httpRequestHeader = {
  headers: {
    "Content-Type": "application/json",
  },
}

const useSignin = () => {
  const navigate = useNavigate()
  const [emailAddress, setEmailAddress] = useState("")
  const [passWord, setPassword] = useState("")
  const emailPasswordData = { email: emailAddress, password: passWord }
  const [disable, setDisable] = useState(true)
  const [submit, setSubmit] = useState(false)

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
      alert("로그인되었습니다. 😎")
      localStorage.setItem("JWT", response.data.access_token)
      navigate("/todos")
      return response.data.access_token
    } catch (error) {
      alert("이메일 혹은 비밀번호가 틀린거..같은데요?😓")
    } finally {
      setSubmit(false)
    }
  }

  useEffect(() => {
    const accessToken = localStorage.getItem("JWT")
    if (accessToken) {
      alert("이미 로그인이 되있으시네요?🤔")
      navigate("/todos")
    }
  }, [navigate])

  useEffect(() => {
    if (emailAddress.includes("@") && passWord.length >= 8) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }, [emailAddress, passWord])

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

export default useSignin

/* --------------------------------- modules -------------------------------- */
import { lazy, Suspense } from "react"

import {
  RouterProvider,
  createRoutesFromElements,
  createHashRouter,
  Route,
} from "react-router-dom"
import "./App.css"
//sync (bundle)
// import WelcomePage from "./WelcomePage"

//async (code splitiing)
//Dynamic import
//react.lazy + suspense + fallback(스피너)

/* ---------------------------------- pages --------------------------------- */
const Layout = lazy(() => import("./Layout"))
const Home = lazy(() => import("./@pages/Home/Home"))
const Signup = lazy(() => import("./@pages/Sign/Signup/Signup"))
const Signin = lazy(() => import("./@pages/Sign/Signin/Signin"))
const Todo = lazy(() => import("./@pages/ToDo/Todo"))
const Logout = lazy(() => import("./@pages/Sign/Logout"))

let router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "todo",
        element: <Todo />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
    ],
  },
])

router = createHashRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
      errorElement={<div role="alert">라우팅 오류 발생</div>}
    >
      <Route index element={<Home />} />
      <Route path="signup" element={<Signup />} />
      <Route path="Signin" element={<Signin />} />
      <Route path="Todo" element={<Todo />} />
      <Route path="Logout" element={<Logout />} />
    </Route>,
  ),
)

/* ----------------------------------- app ---------------------------------- */

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  )
}

function Loading() {
  return <div role="alert">로딩중 ...</div>
}

export default App

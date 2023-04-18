/* --------------------------------- modules -------------------------------- */
import { lazy, Suspense } from "react"

import { RouterProvider, createBrowserRouter } from "react-router-dom"
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
    ],
  },
])

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

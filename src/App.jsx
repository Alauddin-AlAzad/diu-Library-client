import { Route, Routes } from "react-router"
import Root from "./Layout/Root"
import Home from "./pages/Home"
import Dashboard from "./pages/Allbook"
import Allbook from "./pages/Allbook"
import ErrorPage from "./pages/ErrorPage"
import Register from "./pages/Register"

function App() {


  return (
    <>
      <Routes >
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Root></Root>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/allbook" element={<Allbook></Allbook>}></Route>
        </Route>
        <Route path="register" element={<Register></Register>}></Route>

      </Routes>
    </>
  )
}

export default App

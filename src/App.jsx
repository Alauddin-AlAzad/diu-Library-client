import { Route, Routes } from "react-router"
import Root from "./Layout/Root"
import Home from "./pages/Home"
import Dashboard from "./pages/Allbook"
import Allbook from "./pages/Allbook"
import ErrorPage from "./pages/ErrorPage"
import Register from "./pages/Register"
import Login from "./pages/Login"
import BookDetails from "./pages/BookDetails"

function App() {


  return (
    <>
      <Routes >
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Root></Root>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/allbook" element={<Allbook></Allbook>}></Route>
          <Route path="/bookdetails" element={<BookDetails></BookDetails>}></Route>
        </Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        

      </Routes>
    </>
  )
}

export default App

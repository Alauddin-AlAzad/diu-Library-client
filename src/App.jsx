import { Route, Routes } from "react-router"
import Root from "./Layout/Root"
import Home from "./pages/Home"
import Dashboard from "./pages/Allbook"
import Allbook from "./pages/Allbook"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Root></Root>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/allbook" element={<Allbook></Allbook>}></Route>
        </Route>

      </Routes>
    </>
  )
}

export default App

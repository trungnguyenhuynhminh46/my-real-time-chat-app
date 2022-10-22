// Library
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Assets
// Components
import { Home, Register, Login } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="" index element={<Home></Home>}></Route>
          <Route path="register" element={<Register></Register>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

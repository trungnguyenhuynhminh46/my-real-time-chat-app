// Library
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
// Assets
import AuthContext from "./context/AuthContext";
// Components
import { Home, Register, Login } from "./pages";

function App() {
  const { currentUser } = useContext(AuthContext);
  function ProtectedRoute({ children }) {
    if (!currentUser) {
      return <Login></Login>;
    }
    return children;
  }
  return (
    <Routes>
      <Route path="/">
        <Route
          path=""
          index
          element={
            <ProtectedRoute>
              <Home></Home>
            </ProtectedRoute>
          }
        ></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
      </Route>
    </Routes>
  );
}

export default App;

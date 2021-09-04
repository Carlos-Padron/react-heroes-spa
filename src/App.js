import { useEffect, useReducer } from "react";
import "./App.css";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";
import AppRouter from "./routes/AppRouter";

const init = () => {
  return (
    JSON.parse(localStorage.getItem("user")) || {
      logged: false,
    }
  );
};

function App() {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("user",JSON.stringify(user));
  }, [user]);

  return (
    <div className="">
      <AuthContext.Provider value={{ user, dispatch }}>
        <AppRouter />
      </AuthContext.Provider>
    </div>
  );
}

export default App;

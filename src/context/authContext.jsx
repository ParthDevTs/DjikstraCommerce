import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
export const AuthContext = createContext({ isLoggedIn: false });

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { resetCounters, loginDataLoad } = useCart();

  const logon = async () => {
    const creds = {
      email: "abc@gmail.com",
      password: "abc",
    };
    await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(creds),
    })
      .then(async (res) => await res.json())
      .then(async (data) => {
        localStorage.setItem("encodedToken", data.encodedToken);

        setIsLoggedIn(true);
        navigate(location?.state?.from?.pathname);
        loginDataLoad();
      })
      .catch((e) => console.error(e));
  };

  const logOut = () => {
    resetCounters();
    setIsLoggedIn(false);
    localStorage.removeItem("encodedToken");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, logon, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuthContext = () => useContext(AuthContext);

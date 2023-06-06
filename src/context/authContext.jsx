import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import { toast } from "react-toastify";
export const AuthContext = createContext({ isLoggedIn: false });

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { resetCounters, loginDataLoad } = useCart();

  const logon = async () => {
    let id = toast.loading("Logging In");
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
        localStorage.setItem("loginEmail", creds.email);
        setIsLoggedIn(true);
        navigate(location?.state?.from?.pathname);
        loginDataLoad();
        toast.done(id);
        toast.success("Logged In");
      })
      .catch((e) => {
        toast.done(id);
        toast.error("Some error Occured");
      });
  };

  const logOut = () => {
    resetCounters();
    setIsLoggedIn(false);
    localStorage.removeItem("encodedToken");
    toast.success("Logged Out In Successfully");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, logon, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuthContext = () => useContext(AuthContext);

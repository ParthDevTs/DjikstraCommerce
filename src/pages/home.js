import { useState } from "react";

export const Home = () => {
  //login

  const getData = async () => {
    try {
      const creds = {
        email: "adarshbalika@gmail.com",
        password: "adarshbalika",
      };
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(creds),
      });

      const { encodedToken } = await res.json();
      localStorage.setItem("encodedToken", encodedToken);
    } catch (e) {
      console.error(e);
    }
  };

  useState(getData, []);

  return (
    <div>
      <button>Get DatA</button>
    </div>
  );
};

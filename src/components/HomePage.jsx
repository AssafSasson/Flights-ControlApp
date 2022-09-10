import React, { useState } from "react";
import{useNavigate} from 'react-router-dom'

function HomePage() {
  const nav = useNavigate();
  const [password, setPassword] = useState();

  const EnterApp = (e) => {
    e.preventDefault();
    if (password !== "12345") {
      alert("uncorrect password");
    }else nav('/controlPannel')


  };

  return (
    <form onSubmit={EnterApp}>
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="text"
        placeholder="Enter Flight Id"
      />
      <br />
      <button>Enter</button>
    </form>
  );
}

export default HomePage;

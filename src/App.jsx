import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainPage from "./components/mainPage";
import Header from "./components/header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Header />
      <MainPage />
    </>
  );
}

export default App;

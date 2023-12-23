// App.js
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [group, setGroup] = useState("priority");
  const [order, setOrder] = useState("priority");

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <Header
        setGroup={setGroup}
        setOrder={setOrder}
        setDarkMode={setDarkMode}
        darkMode={darkMode}
      />

      <Main group={group} order={order} />
    </div>
  );
}

export default App;

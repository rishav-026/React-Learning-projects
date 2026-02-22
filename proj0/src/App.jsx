import { useState } from "react";
import "./App.css";
import Clock from "./Clock";
import RandomPhotos from "./RandomPhotos";
import Users from "./Users";
import Todo from "./Todo";
import "./App.css"

function App() {
  const [activeComponent, setActiveComponent] = useState("home");

  return (
    <div className="container">
      <h1 className="title">My React Dashboard</h1>

      <div className="button-group">
        <button onClick={() => setActiveComponent("home")}>Home</button>
        <button onClick={() => setActiveComponent("clock")}>Clock</button>
        <button onClick={() => setActiveComponent("photos")}>Random Photos</button>
        <button onClick={() => setActiveComponent("users")}>Users</button>
        <button onClick={() => setActiveComponent("todo")}>Todo</button>
      </div>

      <div className="content">
        {activeComponent === "home" && <h2>Welcome to Home Page 🚀</h2>}
        {activeComponent === "clock" && <Clock />}
        {activeComponent === "photos" && <RandomPhotos />}
        {activeComponent === "users" && <Users />}
        {activeComponent === "todo" && <Todo />}
      </div>
    </div>
  );
}

export default App;
// Main Dependencies
import React from "react";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { Calendar } from "./components/calendar";
import "./styles.css";

// Main App Component
const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <Calendar />
      </div>
    </div>
  );
};

export default App;

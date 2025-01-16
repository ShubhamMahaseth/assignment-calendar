// Main Dependencies
import React from "react";

export function Header() {
  return (
    <header className="header">
      <div>
        <span className="logo">🎓</span>
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>
      <div className="header-icons">
        <span className="icon">🏠</span>
        <span className="icon">🏠</span>
        <span className="icon">🏠</span>
      </div>
      <div className="header-icons">
        <span className="icon">⭐</span>
        <span className="icon">🔔</span>
        <span className="icon profile-icon">👤</span>
      </div>
    </header>
  );
}

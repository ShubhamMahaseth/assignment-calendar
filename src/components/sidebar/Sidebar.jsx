// Main Dependencies
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { HiMiniAcademicCap } from "react-icons/hi2";

// Sidebar Component
export function Sidebar() {
  const events = [
    { id: 1, name: "Event-1", color: "#FFECB3" },
    { id: 2, name: "Event-2", color: "#BBDEFB" },
    { id: 3, name: "Event-3", color: "#C8E6C9" },
    { id: 4, name: "Event-4", color: "#FFCDD2" },
    { id: 5, name: "Event-5", color: "#D1C4E9" },
  ];

  return (
    <aside>
      <nav className="sidebar">
        <ul className="menu">
          <li className="menu-item">
            <span className="icon">
              <AiFillHome />
            </span>
            Home
          </li>
          <li className="menu-item">
            <span className="icon">
              <HiMiniAcademicCap />
            </span>
            Academi
            <ul className="submenu">
              <li>Academi Calendar</li>
              <li>My Calendar</li>
            </ul>
          </li>
        </ul>
      </nav>

      <section className="sidebar">
        <h3>My Schedule</h3>
        <ul className="checkbox-list">
          {events.map((event) => (
            <div className="event-color" key={event.id}>
              <input
                type="checkbox"
                name={event.name}
                id={event.id}
                value={event.name}
                style={{
                  accentColor: event.color,
                }}
              />
              <label htmlFor={event.id}>{event.name}</label>
            </div>
          ))}
        </ul>
      </section>
      <section className="sidebar">
        <h3>Upcoming Events</h3>
        <div className="upcoming-events">
          {events.map((event) => (
            <div
              key={event.id}
              className="event-card"
              style={{ backgroundColor: event.color }}
            >
              <img
                src={`https://placehold.co/400`}
                alt={event.name}
                className="event-image"
              />
              <div className="event-details">
                <p className="event-name">{event.name}</p>
                <div className="flex-container">
                  <p className="event-description">+ Description</p>
                  <p className="event-time">12:00 AM</p>
                </div>
              </div>
              <div className="event-options">•••</div>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}

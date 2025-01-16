// Main Dependencies
import React from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import "./style.css";

export function Calendar() {
  const events = [
    { id: 1, title: "Event-1", start: "07:00", end: "08:00", color: "#FFFACD" },
    { id: 2, title: "Event-2", start: "07:00", end: "10:00", color: "#E6F7FF" },
    { id: 3, title: "Event-3", start: "11:00", end: "13:00", color: "#DFF2E1" },
    { id: 4, title: "Event-4", start: "11:00", end: "13:00", color: "#CCF1FF" },
    { id: 5, title: "Event-5", start: "14:00", end: "17:00", color: "#FFF0F0" },
    { id: 6, title: "Event-6", start: "14:00", end: "17:00", color: "#FFE4E1" },
    { id: 7, title: "Event-7", start: "14:00", end: "18:00", color: "#c9f897" },
  ];

  const timeSlots = Array.from({ length: 11 }, (_, i) => {
    const hour = 7 + i;
    return `${hour}:00`;
  });
  const calculatePosition = (start, end) => {
    const [startHour, startMin] = start.split(":").map(Number);
    const [endHour, endMin] = end.split(":").map(Number);

    const startOffset = (startHour - 7) * 60 + startMin;
    const endOffset = (endHour - 7) * 60 + endMin;

    return {
      top: `${(startOffset / 660) * 100}%`,
      height: `${((endOffset - startOffset) / 660) * 100}%`,
    };
  };

  const calculateWidth = (eventIndex) => {
    const overlaps = events.filter(
      (e, i) =>
        i !== eventIndex &&
        e.start < events[eventIndex].end &&
        e.end > events[eventIndex].start
    );
    const width = overlaps.length > 0 ? `48%` : `98%`;
    const marginLeft =
      overlaps.length > 0 ? (eventIndex % 2 === 0 ? "2%" : "50%") : "1%";

    return { width, marginLeft };
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <div className="date-navigation">
          <button>
            <AiFillCaretLeft />
          </button>
          <span>02-07-2024</span>
          <button>
            <AiFillCaretRight />
          </button>
        </div>
        <div className="date-navigation">
          <button>Day</button>
          <button>Week</button>
          <button>Month</button>
          <button>Year</button>
        </div>
        <button>Today</button>
      </div>
      <div className="calendar">
        <div className="time-column">
          {timeSlots.map((time, index) => (
            <div key={index} className="time-slot">
              {time}
            </div>
          ))}
        </div>
        <div className="events-column">
          {events.map((event, index) => {
            const position = calculatePosition(event.start, event.end);
            const width = calculateWidth(index);
            return (
              <div
                key={event.id}
                className="event"
                style={{
                  backgroundColor: event.color,
                  ...position,
                  ...width,
                }}
              >
                <div className="event-title">{event.title}</div>
                <div className="event-time">
                  {event.start} - {event.end}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

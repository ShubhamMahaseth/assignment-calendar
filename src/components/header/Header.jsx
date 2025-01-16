// Main Dependencies
import React from "react";
import {
  AiOutlineNotification,
  AiOutlineMessage,
  AiOutlineHome,
  AiOutlineStar,
  AiOutlineGift,
} from "react-icons/ai";
import { HiAcademicCap } from "react-icons/hi2";
import { MdAccountCircle } from "react-icons/md";

export function Header() {
  return (
    <header className="header">
      <div>
        <span className="logo">
          <HiAcademicCap />
        </span>
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>
      <div className="header-icons">
        <span className="icon">
          <AiOutlineHome />
        </span>
        <span className="icon">
          <AiOutlineStar />
        </span>
        <span className="icon">
          <AiOutlineGift />
        </span>
      </div>
      <div className="header-icons">
        <span className="icon">
          <AiOutlineMessage />
        </span>
        <span className="icon">
          <AiOutlineNotification />
        </span>
        <span className="icon profile-icon">
          <MdAccountCircle />
        </span>
      </div>
    </header>
  );
}

import { useState, useEffect } from "react";

const FolllowCard = () => {
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
  });
  const [cursor, setCursor] = useState({
    cursorX: 0,
    cursorY: 0,
    inside: true,
  });

  const handleMouseMove = (e) => {
    setCursor({
      ...cursor,
      cursorX: e.clientX,
      cursorY: e.clientY,
    });
  };

  const handleArea = (e) => {
    setCursor({
      ...cursor,
      inside: !cursor.inside,
    });
  };
  return (
    <div
      className="follow-card"
      style={{ left: cursor.cursorX, top: cursor.cursorY }}
    ></div>
  );
};

export default FolllowCard;

import { useState, useEffect } from "react";

const FollowTriangles = () => {
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
      cursorX: e.clientX + 100,
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
    <>
      <div
        className="follow-tri one"
        style={{ left: cursor.cursorX, top: cursor.cursorY + 10 }}
      ></div>
      <div
        className="follow-tri two"
        style={{ left: cursor.cursorX + 10, top: cursor.cursorY }}
      ></div>
      <div
        className="follow-tri three"
        style={{ left: cursor.cursorX - 10, top: cursor.cursorY }}
      ></div>
    </>
  );
};

export default FollowTriangles;

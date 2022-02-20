import React, { useState } from "react";
import AboveGame from "./component/AboveGame";
import Game from "./component/Game";
import Header from "./component/Header";

export default function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="container">
      <Header score={score} bestScore={0} />
      <AboveGame />
      <Game setScore={setScore} />
    </div>
  );
}

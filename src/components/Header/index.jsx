import React from "react";
import { useSelector } from "react-redux";
import { selectPoint, selectGameOver } from "../../redux/CardSlice";

function Header() {
  const gameOver = useSelector(selectGameOver);
  const point = useSelector(selectPoint);

  if (gameOver) {
    return (
      <div className="text-center bg-primary bg-opacity-25 mb-4">
        <div> Congratulations. Your score: {point} </div>
        <a href="/">
          <button className="btn btn-primary"> Play again </button>
        </a>
      </div>
    );
  }
  return (
    <div className="text-center mb-1 bg-primary bg-opacity-25">
      <h3> Breaking Bad - Memory Game</h3>
      <p className="fs-7">
        You will earn 50 points for pairs and lose 10 for fails!
      </p>
      <p className="fw-bold">
        Your score: <span className="fw-normal">{point}</span>
      </p>
    </div>
  );
}

export default Header;

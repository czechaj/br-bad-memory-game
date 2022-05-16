import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../index.css";
import { selectChars, shuffle } from "../../redux/CardSlice";
import Card from "./Card";

function Cards() {
  const dispatch = useDispatch();
  const chars = useSelector(selectChars);
  useEffect(() => {
    dispatch(shuffle());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        <div className="card-group col-sm-10 mx-auto">
          <div className="row">
            {chars.map((char) => (
              <Card key={char.char_id} char={char} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

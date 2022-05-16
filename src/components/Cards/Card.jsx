import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeVisibility, compare, selectPairs } from "../../redux/CardSlice";

function Card({ char }) {
  const dispatch = useDispatch();
  const pairs = useSelector(selectPairs);
  
  const compareCard = useCallback( () => {
    dispatch(compare());
  }, [dispatch])

  useEffect(() => {
    if (pairs.length === 2) {
      setTimeout(compareCard, 1000);
    }
  }, [pairs, compareCard]);


  const handleClick = (id) => {
    dispatch(changeVisibility({ id }));

    setTimeout(compareCard, 800);
  };

  return (
    <div
      className="card col-sm-2"
      onClick={() => {
        handleClick(char.char_id);
        compare();
      }}
    >
      <img
        src={
          char.image_visible
            ? char.img
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnWzKowYb65Q-mzIgeoo9LWPsQDwwH2-9YA&usqp=CAU"
        }
        className="card-img"
        alt={char.name}
      />
    </div>
  );
}

export default Card;

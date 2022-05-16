import { createSlice } from "@reduxjs/toolkit";
import data from "../data/bbad.json";

export const CardSlice = createSlice({
  name: "cards",
  initialState: {
    items: data,
    selectedItems: [],
    point: 0,
    gameOver: false,
  },
  reducers: {
    changeVisibility: (state, action) => {
      const selectedChar = state.items.find(
        (item) => item.char_id === action.payload.id
      );
      if (state.selectedItems.length !== 2) {
        selectedChar.image_visible = true;

        state.selectedItems.push(selectedChar);
      }
    },
    compare: (state) => {
      if (state.selectedItems.length === 2) {
        const item1 = state.selectedItems[0].char_id;
        const item2 = state.selectedItems[1].char_id;
        if (state.selectedItems[0].name === state.selectedItems[1].name) {
          state.point += 50;
        } else {
          for (let i = 0; i < state.items.length; i++) {
            if (
              state.items[i].char_id === item1 ||
              state.items[i].char_id === item2
            ) {
              state.items[i].image_visible = false;
            }
          }
          state.point -= 10;
        }
        state.selectedItems = [];
      }
      const isOver = state.items.filter((item) => item.image_visible === true);
      if (isOver?.length === 30) {
        state.gameOver = true;
      }
    },
    shuffle: (state) => {
      let currentIndex = state.items.length;
      let randomIndex;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [state.items[currentIndex], state.items[randomIndex]] = [
          state.items[randomIndex],
          state.items[currentIndex],
        ];
      }
    },
  },
});

export const selectChars = (state) => state.cards.items;
export const selectPairs = (state) => state.cards.selectedItems;
export const selectPoint = (state) => state.cards.point;
export const selectGameOver = (state) => state.cards.gameOver;
export const { changeVisibility, compare, shuffle, endGame } =
  CardSlice.actions;
export default CardSlice.reducer;

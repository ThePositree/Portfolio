import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const moneyStorage = +localStorage.getItem("money")!;
const currentRunnerStorage = +localStorage.getItem("currentRunner")!;
const purchasedItemsStorage = localStorage.getItem("purchasedItems");

const money = moneyStorage;

const currentRunner = currentRunnerStorage === 0 ? 1 : currentRunnerStorage;

const purchasedItems = purchasedItemsStorage === null ? [] : purchasedItemsStorage.split(",").map((item) => +item);

interface stateAppShop {
  money: number;
  purchasedItems: number[];
  currentRunner: number;
}

const initialState: stateAppShop = {
  money,
  purchasedItems,
  currentRunner,
};

const moneySlice = createSlice({
  name: "money",
  initialState,
  reducers: {
    addMoney(state, { payload: addedMoney }: PayloadAction<number>) {
      if (isNaN(addedMoney)) return state;
      if (Math.sign(addedMoney) === -1) return state;
      state.money = state.money + addedMoney;
      localStorage.setItem("money", String(state.money));
      return state;
    },
    buyItem(state, { payload }: PayloadAction<{ id: number; price: number }>) {
      if (state.money < payload.price) return state;
      const purchasedItems = state.purchasedItems.map((item) => +item);
      if (purchasedItems.includes(payload.id)) return state;
      state.purchasedItems.push(payload.id);
      state.money = state.money - payload.price;
      localStorage.setItem("purchasedItems", state.purchasedItems.join(","));
      localStorage.setItem("money", String(state.money));
      return state;
    },
    selectRunner(state, { payload: idRunner }: PayloadAction<number>) {
      state.currentRunner = idRunner;
      localStorage.setItem("currentRunner", String(idRunner));
      return state;
    },
  },
});

export const { addMoney, buyItem, selectRunner } = moneySlice.actions;
export default moneySlice.reducer;

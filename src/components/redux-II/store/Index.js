import { configureStore } from "@reduxjs/toolkit";
import {
  carsReducer,
  addCar,
  removeCar,
  changeSearchTerm
} from "./slices/carsSlice";
import {
  formReducer,
  changeName,
  changeCost
} from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer
  }
})
// console.log(store.getState());
export { store, addCar, removeCar, changeSearchTerm, changeCost, changeName}

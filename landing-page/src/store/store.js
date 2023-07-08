import { configureStore } from '@reduxjs/toolkit'
import apiSlice from '../slice/apiSlice';


let reducer = {
  api: apiSlice
}
const store = configureStore({
  reducer: reducer,
  devTools: true,
})
export default store;
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value1 :0,
  value2 :0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment1: (state) => {
      state.value1 += 1
    },
    decrement1: (state) => {
      if (state.value1 >0){
      state.value1 -= 1
      }
    },
    increment2: (state) => {
      state.value2 += 1
    },
    decrement2: (state) => {
      if (state.value2 >0){
      state.value2 -= 1
      }
    },
  },
})

export const { increment1, decrement1, increment2, decrement2 } = counterSlice.actions

export default counterSlice.reducer
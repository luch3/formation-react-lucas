import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Eleve} from '../model/Eleve';

export interface FormSliceState {
  value : Eleve[]
}
const initialState: FormSliceState = { value: [] }

initialState.value = [];

interface Payload {
  type: string;
  message?:string;
  eleves?: Eleve[];
  eleve?: Eleve;
}

const formSlice = createSlice({
  name: 'eleve',
  initialState,
  reducers: {
    fetchSucceed(state, payload:Payload) {
      state.value = payload.eleves;
    },
    fetchError(state, {payload}:PayloadAction<{message:string}>) {
      console.log(payload);
    },
    addSucceed(state,payload:Payload) {
      state.value = [...state.value,payload.eleve];
    }
  },
})



export const {  } = formSlice.actions
export default formSlice.reducer
import { call, put } from 'redux-saga/effects'
import { createSliceSaga, SagaType } from "redux-toolkit-saga";
import { Eleve } from './FormSlice';
import { PayloadAction } from "@reduxjs/toolkit";
import StudentRepository from './repository/StudentRepository';




const repo = new StudentRepository();

const slice = createSliceSaga({
  name: "sliceSaga",
  caseSagas: {
    *fetchStudent() {
        try {
           const eleves = yield call(repo.fetchStudents);
           yield put({type: "eleve/fetchSucceed", eleves: eleves});
        } catch (e) {
           yield put({type: "eleve/fetchError", message: e.message});
        }
    },
    *addStudent({payload}: PayloadAction<Eleve>) {
        try {
            const eleveId = yield call(repo.addStudent,payload);
            console.log(eleveId,{...payload, id: eleveId});
            yield put({type:"eleve/addSucceed", eleve: {...payload, id: eleveId}});
        } catch (e) {
            yield put({type: "eleve/addError", message: e.message});
        }
    }
  },
  sagaType: SagaType.TakeLatest,
});

export default slice.saga; // call composeSaga in root saga

export const { fetchStudent, addStudent } = slice.actions; // action with caseSagas





export interface IFetchAction {
    type: string;
    payload:any;
}
export const fetchAction: IFetchAction = {
    type: 'FETCH_ACTION',
    payload: {}
}
import { PromiseExtended } from 'dexie';
import {Eleve} from '../FormSlice'

export default interface IStudentRepository {
    addStudent(eleve: Eleve): PromiseExtended<number>;
    fetchStudents(): PromiseExtended<Eleve[]>;
}
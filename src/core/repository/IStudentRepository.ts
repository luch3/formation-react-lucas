import { PromiseExtended } from 'dexie';
import {Eleve} from '../../model/Eleve';

export default interface IStudentRepository {
    addStudent(eleve: Eleve): PromiseExtended<number>;
    fetchStudents(): PromiseExtended<Eleve[]>;
}
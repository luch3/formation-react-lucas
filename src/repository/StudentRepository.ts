import { Eleve } from "../FormSlice";
import IStudentRepository from "./IStudentRepository";
import AppDB from "../AppDB";
import { PromiseExtended } from "dexie";


export default class StudentRepository implements IStudentRepository {
    public StudentRepository() {
        
    }
    addStudent(eleve: Eleve): PromiseExtended<number> {
        const db = new AppDB();
        return db.eleves.put(eleve);
    }
    fetchStudents(): PromiseExtended<Eleve[]> {
        const db = new AppDB();
        return db.eleves.toArray();
    }
}
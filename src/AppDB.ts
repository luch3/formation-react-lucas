import Dexie from 'dexie';
import { Eleve } from './FormSlice';


export default class AppDB extends Dexie {
    // Declare implicit table properties.
    // (just to inform Typescript. Instanciated by Dexie in stores() method)
    eleves: Dexie.Table<Eleve, number>; // number = type of the primkey
    //...other tables goes here...

    constructor () {
        super("AppDB");
        this.version(1).stores({
            eleves: "++id, nom, prenom, email, tel"
            //...other tables goes here...
        });
        // The following line is needed if your typescript
        // is compiled using babel instead of tsc:
        this.eleves = this.table("eleves");
    }
}

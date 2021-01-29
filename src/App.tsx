import './App.css';
import React from 'react';
import Form from './components/Form';
import { Eleve } from './FormSlice';
import { Provider } from 'react-redux';
import configureStore from './Store';
import EleveList from './components/EleveList';
import AppDB from './AppDB'

const store = configureStore();



const db = new AppDB();
export default function App() {
  let handleSubmit = (student: Eleve) : void => { //le submit n'est pas utilisé ici au final
    db.table('eleves').put(student);
  }


  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Form name={"MonPetitForm"} onSubmit={handleSubmit} />
          <div>
            <EleveList/>
          </div>
        </header>
      </div>
    </Provider>
  );
}

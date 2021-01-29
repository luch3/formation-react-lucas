import './App.css';
import React from 'react';
import MyForm from './Form';
import { Eleve } from '../core/FormSlice';
import { Provider } from 'react-redux';
import configureStore from '../core/Store';
import EleveList from './EleveList';
import AppDB from '../core/AppDB'

const store = configureStore();



const db = new AppDB();
export default function App() {



  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <MyForm name={"MonPetitForm"} />
          <div>
            <EleveList/>
          </div>
        </header>
      </div>
    </Provider>
  );
}

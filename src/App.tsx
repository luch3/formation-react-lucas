import './App.css';
import React from 'react';
import MyForm from './components/Form';
import { Provider } from 'react-redux';
import configureStore from './core/Store';
import EleveList from './components/EleveList';

const store = configureStore();



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

import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addStudent} from '../saga';

const mapDispatchToProps = {
  addStudent
}

interface OwnTypes {
  name: String,
  onSubmit: (event) => void
}

type FormProps = typeof mapDispatchToProps & OwnTypes;
function Form (props: FormProps) {
  const initialState = {nom: '', prenom: '', email: '', tel: ''};
  const [state, setState] = useState(initialState);
  


  
    
      function handleChange(event) {
        setState({...state, [event.target.name]: event.target.value});
      }

      function handleSubmit(event) {
        event.preventDefault();
        console.log(state);
        props.addStudent({...state});

        
      }


    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="nomText">Nom:</label><br/>
        <input type="text" name="nom" id="nomText" value={state.nom} onChange={handleChange} placeholder="Nom"/><br/>

        <label htmlFor="prenomText">Prénom:</label><br/>
        <input type="text" name="prenom" id="prenomText" value={state.prenom} onChange={handleChange} placeholder="Prénom"/><br/>

        <label htmlFor="emailText">Email:</label><br/>
        <input type="email" name="email" id="emailText" value={state.email} onChange={handleChange} placeholder="Email"/><br/>

        <label htmlFor="telText">Téléphone:</label><br/>
        <input type="tel" name="tel" id="telText" value={state.tel} onChange={handleChange} placeholder="Tel"/><br/>

        <button>Ajouter l'élève</button>
      </form>
    );
}
export default connect(null,mapDispatchToProps)(Form); //MAGIE

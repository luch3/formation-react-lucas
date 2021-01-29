import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';
import {Eleve} from '../FormSlice';
import {fetchStudent} from '../saga';
import './EleveList.css';


//faire interface pour props
function mapStateToProps(state) {
    return {
        eleves: (state as {value: Eleve[]}).value 
    };
}
const mapDispatchToProps = {
    fetchStudent
}

  
type FormProps = typeof mapDispatchToProps &  {eleves: Eleve[]};
function EleveItem ({eleve}) {
    return <div className={"eleve-item"}>
        <span>
            {eleve.prenom} {eleve.nom}
        </span>
    </div>
}
function ElevePanel ({eleve}) {
    if(!eleve) 
        return (<div><span>Détails d'un élève:</span></div>);
    return (
    <div>
        <span>Détails d'un élève:</span><br/>
        <div className={"eleve-item"}>
            <span>
                {eleve.id}
            </span><br/>
            <span>
                {eleve.prenom} {eleve.nom}
            </span><br/>
            <span>
                Email: {eleve.email}
            </span><br/>
            <span>
                Tel: {eleve.tel}
            </span>
        </div>
    </div>
    );
}




export function EleveList(props: FormProps) {
    const initialState: Eleve = null;
    const [state, setState] = useState(initialState);
    useEffect(() => {
        props.fetchStudent();
      }, [props]);


      const handleClick = (eleve: Eleve) => {
            setState(eleve);
      }


    if(!props.eleves)
        return<ul></ul>;
    return (
    <div className="EleveListVue">
        <div>
            <nav>
                <ul className={"ScrollableUl"}>
                    {props.eleves.map(eleve => <li key={eleve.id} onClick={() => handleClick(eleve)}><EleveItem eleve={eleve} /></li>)}
                </ul>
            </nav>
        </div>
        <div>
            <ElevePanel eleve={state}/>
        </div>
    </div>)
}
export default connect(mapStateToProps,mapDispatchToProps)(EleveList); //MAGIE


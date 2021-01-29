import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';
import {Eleve, FormSliceState} from '../core/FormSlice';
import {fetchStudent} from '../core/saga';
import './EleveList.css';
import ElevePanel from './ElevePanel';
import EleveItem from './EleveItem';


//faire interface pour props
function mapStateToProps(state:FormSliceState) {
    return {
        eleves: state.value 
    };
}
const mapDispatchToProps = {
    fetchStudent
}

  
type FormProps = typeof mapDispatchToProps &  {eleves: Eleve[]};


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


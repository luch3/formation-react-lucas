import { Eleve } from "../model/Eleve";


interface IProps {
    eleve: Eleve
}

export default function ElevePanel (props:IProps) {
    if(!props.eleve) 
        return (<div><span>Détails d'un élève:</span></div>);
    return (
    <div>
        <span>Détails d'un élève:</span><br/>
        <div className={"eleve-item"}>
            <span>
                {props.eleve.id}
            </span><br/>
            <span>
                {props.eleve.prenom} {props.eleve.nom}
            </span><br/>
            <span>
                Email: {props.eleve.email}
            </span><br/>
            <span>
                Tel: {props.eleve.tel}
            </span>
        </div>
    </div>
    );
}
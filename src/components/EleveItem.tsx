import { Eleve } from "../model/Eleve";


interface IProps {
    eleve: Eleve;
    handleClick: () => void;
}

export default function EleveItem (props:IProps) {
    return <div className={"eleve-item"} onClick={() => props.handleClick()}>
        <span>
            {props.eleve.prenom} {props.eleve.nom}
        </span>
    </div>
}


export default function ElevePanel ({eleve}) {
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


export default function EleveItem ({eleve}) {
    return <div className={"eleve-item"}>
        <span>
            {eleve.prenom} {eleve.nom}
        </span>
    </div>
}
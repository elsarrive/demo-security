import { useState, useMemo } from "react";
import MyButton from '../MyButton'
import classNames from "classnames";
import './Composant1.css'

interface Composant1Props {
    nom: string;
    nom2: string
}


function Composant1(props: Composant1Props) {
    const [nom, setNom] = useState(props.nom)
    
    function changeName() {
        setNom(props.nom2)
    }

    const OuiouNon = useMemo(() => {
        console.log('calcul de la fonction')
        if (nom === props.nom2) {
            return <p>Oui</p>
        } else {
            return <p>Non</p>
        }
    }, [nom, props.nom2])

    /*
    function OuiouNon() {
        console.log('calcul de la fonction')
        if (nom === props.nom2) {
            return <p>Oui</p>
        } 
        else {
            return <p>Non</p>
        }
    }
    */
    
    return (
    <>
        <p>Hello World</p>
        <p className={classNames({red : nom === 'Alice'})}>Hello {nom}</p>
        { nom == props.nom2 ? <p>La condition est vraie</p> : <p>La condition est fausse</p>}
        <button onClick={changeName}>Changer de nom</button>
        {OuiouNon}
        {OuiouNon}
        {OuiouNon}
        {/* {OuiouNon()} */}
        <MyButton />
        <MyButton />
        <hr />


    </>)
}

export default Composant1
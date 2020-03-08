import React from 'react'
import '../app-defaults/App.css'
import Transportmittel from './Models/Transportmittel'
import AddFahrzeug from './AddFahrzeug'
import Fahrzeuge from './Fahrzeuge'

export default function App() {
    // const myTransportmittel = new Transportmittel(0, 50, 0, 'fahrrad', 2014);
    return (
        <div>
            <AddFahrzeug />
            <Fahrzeuge />
        </div>
    )
    // <p>myTransportmittel.maxGeschw: {myTransportmittel.maxGeschw}</p>
}
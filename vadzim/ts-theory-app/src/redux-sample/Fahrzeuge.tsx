import React from 'react'
import { connect } from 'react-redux'
import Transportmittel from './Models/Transportmittel'
import AddFahrzeug from './AddFahrzeug'
import { removeTransportActionCreator } from './ActionCreators'

function Fahrzeuge(props: any) {

    return (
        <table>
            <caption>Fahrzeuge</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Bezeichnung</th>
                    <th>AktGeschw</th>
                    <th>MaxGeschw</th>
                    <th>Baujahr</th>
                    <th>Treibstoff</th>
                    <th>Anzahl Türen</th>
                    <th>Anzahl Räder</th>
                    <th>Del</th>
                </tr>
            </thead>
            <tbody>
                {props.fahrzeuge.map((fahrzeug: any) => (
                    <tr key={fahrzeug.id}>
                    <td>{fahrzeug.id}</td>
                    <td>{fahrzeug.bezeichnung}</td>
                    <td>{fahrzeug.aktGeschw}</td>
                    <td>{fahrzeug.maxGeschw}</td>
                    <td>{fahrzeug.baujahr}</td>
                    <td>{fahrzeug.treibstoff}</td>
                    <td>{fahrzeug.anzTüren}</td>
                    <td>{fahrzeug.anzRäder}</td>
                    <td>
                        <button onClick={() => {
                            props.dispatch(removeTransportActionCreator(fahrzeug.id))
                        }}>x</button>
                    </td>
                </tr>
                ))}
                
            </tbody>
            <tfoot>
                <tr>
                <th>#</th>
                    <th>Bezeichnung</th>
                    <th>AktGeschw</th>
                    <th>MaxGeschw</th>
                    <th>Baujahr</th>
                    <th>Treibstoff</th>
                    <th>Anzahl Türen</th>
                    <th>Anzahl Räder</th>
                    <th>Del</th>
                </tr>
            </tfoot>
        </table>
    )
}
export default connect((state) => ({fahrzeuge: state}))(Fahrzeuge)
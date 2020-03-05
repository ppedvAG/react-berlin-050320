import React from 'react'
import { connect } from 'react-redux'
import Transportmittel from './Models/Transportmittel'
import AddFahrzeug from './AddFahrzeug'

function Fahrzeuge(props: any) {

    return (
        <>
        <AddFahrzeug />
        <table>
            <caption>Fahrzeuge</caption>
            <thead>
                <tr>
                    <th>Bezeichnung</th>
                    <th>AktGeschw</th>
                    <th>MaxGeschw</th>
                    <th>Baujahr</th>
                </tr>
            </thead>
            <tbody>
                {props.fahrzeuge.map((fahrzeug: Transportmittel) => (
                    <tr key={fahrzeug.id}>
                    <td>{fahrzeug.bezeichnung}</td>
                    <td>{fahrzeug.aktGeschw}</td>
                    <td>{fahrzeug.maxGeschw}</td>
                    <td>{fahrzeug.baujahr}</td>
                </tr>
                ))}
                
            </tbody>
            <tfoot>
                <tr>
                    <th>Bezeichnung</th>
                    <th>AktGeschw</th>
                    <th>MaxGeschw</th>
                    <th>Baujahr</th>
                </tr>
            </tfoot>
        </table>
        </>
    )
}

export default connect((state) => ({fahrzeuge: state}))(Fahrzeuge)
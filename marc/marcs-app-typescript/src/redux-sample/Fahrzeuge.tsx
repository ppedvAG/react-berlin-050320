import React from 'react'
import { connect } from 'react-redux'
import Transportmittel from './Models/Transportmittel'

function Fahrzeuge(props: any) {

    return (
        <table>
            <caption>Fahrzeuge</caption>
            <thead>
                <tr>
                    <th>Bezeichnung</th>
                    <th>AktGeschw</th>
                    <th>VMAX</th>
                    <th>Baujahr</th>
                </tr>
            </thead>
            <tbody>
                {props.fahrzeuge.map((fahrzeug: Transportmittel) => (
                    <tr key={fahrzeug.id}>
                        <td>{fahrzeug.aktGeschw}</td>
                        <td>{fahrzeug.bauJahr}</td>
                        <td>{fahrzeug.bezeichnung}</td>
                        <td>{fahrzeug.maxGeschw}</td>
                    </tr>
                ))}

            </tbody>
            <tfoot>
                <tr>
                    <th>Bezeichnung</th>
                    <th>AktGeschw</th>
                    <th>VMAX</th>
                    <th>Baujahr</th>
                </tr>
            </tfoot>
        </table>
    )
}

export default connect((state) => ({
    fahrzeuge: state
}))(Fahrzeuge)
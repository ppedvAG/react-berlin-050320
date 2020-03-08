import React from 'react'
import { addTransportActionCreator } from './ActionCreators'
import { addAutoActionCreator } from './ActionCreators'
import { addFahrradActionCreator } from './ActionCreators'
import { connect } from 'react-redux'

function AddFahrzeug(props: { dispatch: (arg0: { type: string; maxGeschw: number; bezeichnung: string; bauJahr: number; }) => void; }) {
    let maxGeschwBinding: HTMLInputElement
    let bauJahrBinding: HTMLInputElement
    let bezeichnungSelBinding: HTMLSelectElement
    let pedalBinding: HTMLSelectElement
    let anzRäderBinding: HTMLSelectElement
    let treibstoffBinding: HTMLSelectElement
    let anzTürenBinding: HTMLSelectElement
    let maxBaujahr: Date = new Date()
    console.log('maxBaujahr.getFullYear() :', maxBaujahr.getFullYear());
    


    return (
        /* #todo mit form verschwindet der Eintrag nach kurzer Zeit */
        <div>
            <select name="bezeichnungSel" ref={node => bezeichnungSelBinding = node ? node : new HTMLSelectElement()}>
                <option value="Auto">Auto</option>
                <option value="Fahrrad">Fahrrad</option>
                <option value="Transportmittel">Transportmittel</option>
            </select>
            <input type="number" placeholder="maximale Geschwindigkeit" name="maxGeschwInp" id="" min={0} ref={node => maxGeschwBinding = node ? node : new HTMLInputElement()} />
            <input type="number" placeholder="Baujahr" name="bauJahrInp" id="" min={1900} max={maxBaujahr.getFullYear()} ref={node => bauJahrBinding = node ? node : new HTMLInputElement()} />
            
            <select name="pedal" id="" ref={node => pedalBinding = node ? node : new HTMLSelectElement()}>
                <option value="Klassisch">Klassisch</option>
                <option value="Plattform">Plattform</option>
                <option value="Klickpedal">Klickpedal</option>
            </select>
            
            <select name="treibstoff" id="" ref={node => treibstoffBinding = node ? node : new HTMLSelectElement()}>
                <option value="Diesel">Diesel</option>
                <option value="Benzin">Benzin</option>
                <option value="Gas">Gas</option>
                <option value="Strom">Strom</option>
            </select>
            <label htmlFor="anzTüren">anzTüren</label>
            <select name="anzTüren" id="anzTüren" ref={node => anzTürenBinding = node ? node : new HTMLSelectElement()}>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <label htmlFor="anzRäder">anzRäder</label>
            <select name="anzRäder" id="anzRäder" ref={node => anzRäderBinding = node ? node : new HTMLSelectElement()}>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <button onClick={
                () => {
                    if (bezeichnungSelBinding.value === 'Transportmittel') {
                        props.dispatch(addTransportActionCreator(
                            parseInt(maxGeschwBinding.value),
                            bezeichnungSelBinding.value,
                            parseInt(bauJahrBinding.value)
                        ))
                    }
                    if (bezeichnungSelBinding.value === 'Auto') {
                        props.dispatch(addAutoActionCreator(
                            parseInt(maxGeschwBinding.value),
                            bezeichnungSelBinding.value,
                            parseInt(bauJahrBinding.value),                            
                            parseInt(anzRäderBinding.value),
                            treibstoffBinding.value,
                            parseInt(anzTürenBinding.value)
                        ))
                    }

                    if (bezeichnungSelBinding.value === 'Fahrrad') {
                        props.dispatch(addFahrradActionCreator(
                            parseInt(maxGeschwBinding.value),
                            bezeichnungSelBinding.value,
                            parseInt(bauJahrBinding.value), 
                            pedalBinding.value,                           
                            parseInt(anzRäderBinding.value)
                        ))
                        /* 
                        maxGeschwP: number, 
                        bezeichnungP: string, 
                        bauJahrP: number,
                        pedalP: string, 
                        anzRäderP: number
     */
                    }
                    maxGeschwBinding.value = ''
                    bezeichnungSelBinding.selectedIndex = 0
                    bauJahrBinding.value = ''
                }}>ADD</button>
        </div >
    )
}

export default connect()(AddFahrzeug)
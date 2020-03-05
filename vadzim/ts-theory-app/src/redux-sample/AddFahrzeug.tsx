import React from 'react'
import { addTransportActionCreator } from './ActionCreators'
import { connect } from 'react-redux';

function AddFahrzeug(props: { dispatch: (arg0: { type: string; maxGeschw: number; bezeichnung: string; bauJahr: number; }) => void; }) {
    let maxGeschwBinding: HTMLInputElement;
    let bauJahrBinding: HTMLInputElement;
    let bezeichnungSelBinding: HTMLSelectElement;

    return(
        <form>
            <input type="number" placeholder="maximale Geschwindigkeit" name="maxGeschwInp" id="" ref={node => maxGeschwBinding = node ? node : new HTMLInputElement() } />
            <input type="number" placeholder="Baujahr" name="bauJahrInp" id="" ref={node => bauJahrBinding = node ? node : new HTMLInputElement()}/>
            <select name="bezeichnungSel" ref={node => bezeichnungSelBinding = node ? node : new HTMLSelectElement()}>
                <option value="Auto">Auto</option>
                <option value="Fahrrad">Fahrrad</option>
            </select>
            <button onClick={ 
                () => {
                props.dispatch(addTransportActionCreator(
                    +maxGeschwBinding.value, 
                    bezeichnungSelBinding.value, 
                    +bauJahrBinding.value));
                    /* maxGeschwBinding.value = ''
                    bezeichnungSelBinding.value = ''
                    bauJahrBinding.value = '' */
            }}>ADD</button>
        </form>

    )
}

export default connect()(AddFahrzeug)
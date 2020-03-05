import React from 'react'
import { addTransportActionCreator } from './ActionCreators'
import { connect } from 'react-redux';

function AddFahrzeug(props: any) {

    let maxGeschwindigkeitBinding: HTMLInputElement;
    let baujahrBinding: HTMLInputElement;
    let bezeichnungbinding: HTMLSelectElement;

    return (
        <form>
            <input type="number" placeholder="VMAX" name="maxGeschwindigkeitInp" id="" ref={node => maxGeschwindigkeitBinding = node ? node : new HTMLInputElement()} />
            <input type="number" placeholder="Baujahr" name="baujahrInp" id="" ref={node => baujahrBinding = node ? node : new HTMLInputElement()} />
            <select ref={node => bezeichnungbinding = node ? node : new HTMLSelectElement()}>
                <option value="Auto">Auto</option>
                <option value="Fahrrad">Fahrrad</option>
                <option value="Transportmittel">Transportmittel</option>
            </select>
            <button onClick={() => {
                props.dispatch(addTransportActionCreator(parseInt(maxGeschwindigkeitBinding.value), baujahrBinding.value, parseInt(bezeichnungbinding.value)))
                // maxGeschwindigkeitBinding.value = '';
                // baujahrBinding.value = '';
                // bezeichnungbinding.value = '';
            }}>ADD</button>
        </form>
    )
}

export default connect()(AddFahrzeug)
import Transportmittel from "./Models/Transportmittel"
import Auto from "./Models/Auto"
import { Fahrrad } from "./Models/Fahrrad"

const transportReducer = (fahrzeuge = new Array<Transportmittel | Auto | Fahrrad>(), action: any) => {
    switch (action.type) {
        case 'ADD_TRANSPORT':
            const newTransport = new Transportmittel(
                fahrzeuge.length,
                action.maxGeschw,
                0,
                action.bezeichnung,
                action.bauJahr
            )
            return [...fahrzeuge, newTransport]
        case 'ADD_AUTO':
            const newAuto = new Auto(
                fahrzeuge.length,
                action.maxGeschw,
                0,
                action.bezeichnung,
                action.bauJahr,
                action.treibstoff,
                action.anzTüren,
                action.anzRäder
            )
            return [...fahrzeuge, newAuto]
        case 'ADD_FAHRRAD':
            const newFahrrad = new Fahrrad(
                fahrzeuge.length,
                action.maxGeschw,
                0,
                action.bezeichnung,
                action.bauJahr,
                action.pedal,
                action.anzRäder
            )
            return [...fahrzeuge, newFahrrad]
        case 'REMOVE_TRANSPORT':
            let arrayMinusEins = [...fahrzeuge].filter(item => {
                return item.id !== action.id
            })
            for (let i = 0; i < arrayMinusEins.length; i++) {
                arrayMinusEins[i].id = i
            }
            return arrayMinusEins
        /* rdg */
        default:
            return fahrzeuge
    }
}

export default transportReducer
// vor const lässt es sich nicht schreiben !!!
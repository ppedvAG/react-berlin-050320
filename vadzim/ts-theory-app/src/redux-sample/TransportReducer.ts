import Transportmittel from "./Models/Transportmittel"
// import Action from './Models/Action'

const transportReducer = (fahrzeuge = new Array<Transportmittel>(), action: any) => {
    switch (action.type) {
        case 'ADD_TRANSPORT':
            const newTransport = new Transportmittel(fahrzeuge.length, action.maxGeschw, 0, action.bezeichnung, action.bauJahr)
            // (fahrzeuge.length, 0, action.bezeichnung, action.bauJahr, action.maxGeschw)
            return [...fahrzeuge, newTransport]
        case 'REMOVE_TRANSPORT':
            return [...fahrzeuge].filter(item => {
                return item.id !== action.id
            })
        default: 
        return fahrzeuge
    }
}

export default transportReducer
// vor const lässt es sich nicht schreiben !!!
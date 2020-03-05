import Transportmittel from "./Models/Transportmittel"

const transportReducer = (fahrzeuge = new Array<Transportmittel>(), action: any) => {
    switch (action.type) {
        case 'ADD_TRANSPORT':
            const newTransportmittel = new Transportmittel(fahrzeuge.length, action.maxGeschw, 0, action.bezeichnung, action.bauJahr)
            return [
                ...fahrzeuge, newTransportmittel
            ]
        case 'REMOVE_TRANSPORT':
            return [...fahrzeuge].filter(element => {
                return element.id !== action.id
            })
        default:
            return fahrzeuge
    }
}

export default transportReducer
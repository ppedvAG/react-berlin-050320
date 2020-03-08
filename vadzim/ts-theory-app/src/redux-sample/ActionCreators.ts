// import Action from './Models/Action'

export const addTransportActionCreator = (
    maxGeschwP: number,
    bezeichnungP: string,
    bauJahrP: number
) => ({
    type: 'ADD_TRANSPORT',
    maxGeschw: maxGeschwP,
    bezeichnung: bezeichnungP,
    bauJahr: bauJahrP    
})

export const addAutoActionCreator = (
    maxGeschwP: number,
    bezeichnungP: string,
    bauJahrP: number,
    anzRäderP: number,
    treibstoffP: string,
    anzTürenP: number
) => ({
    type: 'ADD_AUTO',
    maxGeschw: maxGeschwP,
    bezeichnung: bezeichnungP,
    bauJahr: bauJahrP,
    anzRäder: anzRäderP,
    treibstoff: treibstoffP,
    anzTüren: anzTürenP
})

export const addFahrradActionCreator = (
    maxGeschwP: number, 
    bezeichnungP: string, 
    bauJahrP: number,
    pedalP: string, 
    anzRäderP: number
    ) => ({
        type: 'ADD_FAHRRAD', 
        maxGeschw: maxGeschwP, 
        bezeichnung: bezeichnungP, 
        bauJahr: bauJahrP,
        pedal: pedalP,
        anzRäder: anzRäderP
    })
    
export const removeTransportActionCreator = (
    id: number
    ) => ({
        type: 'REMOVE_TRANSPORT', 
        id
    })
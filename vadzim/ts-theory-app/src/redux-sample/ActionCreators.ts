import Action from './Models/Action'

export const addTransportActionCreator = (maxGeschwP: number, bezeichnungP: string, bauJahrP: number) => (
    {type: 'ADD_TRANSPORT', maxGeschw: maxGeschwP, bezeichnung: bezeichnungP, bauJahr: bauJahrP}
)

export const addTransportActionCreator = (maxGeschw: number, bezeichnung: string, baujahr: number) => (
    {type: 'ADD_TRANSPORT', maxGeschw: maxGeschw, bezeichnung: bezeichnung, baujahr: baujahr}
)
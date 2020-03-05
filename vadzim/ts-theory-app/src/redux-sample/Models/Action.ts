/* export default class Action {
    constructor(public type: string, public rest: Object) {
    }
} */
type Action = {
    type: string, 
    id?: number, 
    maxGeschw?: number, 
    bezeichnung?: string, 
    bauJahr?: number
}

export default Action
import Transportmittel from './Transportmittel'
import IRollable from './IRollable'

export class Fahrrad extends Transportmittel implements IRollable {
    constructor(public id: number, public maxGeschw: number, public aktGeschw: number, public bezeichnung: string, public bauJahr: number, public pedal: string, public anzRäder: number) {
        super(id, maxGeschw, aktGeschw, bezeichnung, bauJahr);
        this.anzRäder = anzRäder;
    }
}

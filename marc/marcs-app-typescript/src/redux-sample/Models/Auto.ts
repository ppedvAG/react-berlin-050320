import Transportmittel from './Transportmittel'
import IRollable from './IRollable'

export class Auto extends Transportmittel implements IRollable {
    constructor(public id: number, public maxGeschw: number, public aktGeschw: number, public bezeichnung: string, public bauJahr: number, public treibstoff: string, public anzahlTüren: number, public anzRäder: number) {
        super(id, maxGeschw, aktGeschw, bezeichnung, bauJahr);
        this.anzRäder = anzRäder;
    }
}
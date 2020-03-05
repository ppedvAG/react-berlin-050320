import Transportmittel from './Transportmittel'
import IRollable from './IRollable'

export default class Auto extends Transportmittel implements IRollable {
    /**
     *
     */
    constructor(
        public id: number,
        public maxGeschw: number,
        public aktGeschw: number,
        public bezeichnung: string,
        public baujahr: number,
        public treibstoff: string,
        public anzahltüren: number,
        public anzRäder: number) {
        super(id, maxGeschw, aktGeschw, bezeichnung, baujahr)
        this.anzRäder = anzRäder
    }
}
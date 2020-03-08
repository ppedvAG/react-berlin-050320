import Transportmittel from './Transportmittel'
import IRollable from './IRollable'

export class Fahrrad extends Transportmittel implements IRollable {
    /**
     *
     */    
    constructor(
        public id: number,
        public maxGeschw: number, 
        public aktGeschw: number, 
        public bezeichnung: string, 
        public baujahr: number, 
        public pedal: string, 
        public anzRäder: number
        ) {
        super(id, maxGeschw, aktGeschw, bezeichnung, baujahr)
        this.anzRäder = anzRäder
    }
}
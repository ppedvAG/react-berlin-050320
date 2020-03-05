export default class Transportmittel {
    constructor(
        public id: number,
        public maxGeschw: number,        
        public aktGeschw: number, 
        public bezeichnung: string, 
        public baujahr: number) {
    }
}
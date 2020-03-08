import React from 'react'

// PRIMITIVES
// string 
// number


// any
function anySample(): any {
    let inputBox: any = document.querySelector('#inputbox');
    return inputBox
}

// never
// The never type represents the type of values that never occur
// endlose schleife
function neverSample(): never {
    while (true) {

    }
}

function neverSample2(): never {
    throw new Error("message from never");
}
// void
// wenn Funktionen kein Return-Value haben (sprich: eine Prozedur sind)
// null
// undefined
// unknown

// custom data types, enums? 
// union types
type messageType = string | null | undefined

// type aliases
type Ctype = { a: string, b?: number }
function fct({a, b}: Ctype): Ctype {
    let test = {a, b};
    return test;
}
function fct2({a}: Ctype): Ctype {
    let test = {a};
    return test;
}




// ===================================
// DATA STRUCTURES
// array

// ===================================
// Tool Objects
// date
// Math
// RexExp

export default function App() {
    let anySampleReturn = anySample();
    let neverSampleReturn;
    // = neverSample();    
    let myMessage: messageType
    let myMessage2: messageType = 'null';




    return (
        <div>
            <h2>type any</h2>
            <input type="text" id="inputbox" value="myTestInput" onChange={($event) => $event.target.value = "fuck off"} />
            <p>typeof anySampleReturn: {typeof anySampleReturn}</p>
            <p>anySampleReturn: {anySampleReturn}</p> {/* object */}
            <hr />
            <h2>type never</h2>
            <p>typeof neverSampleReturn{typeof neverSampleReturn}</p>
            <p>{typeof neverSample2}</p>
            <hr />
            <h2>union type</h2>
            <p>typeof myMessage: {typeof myMessage}</p> {/* undefined */}
            <p>typeof myMessage2: {typeof myMessage2}</p> {/* string */}
            {/* !!! man bekommt nicht die TS-Datentypen abgespeichert / ausgegeben */}

            <hr/>
            <h2>type assertion</h2>




        </div>

    )

}
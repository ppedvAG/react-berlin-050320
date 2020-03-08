export default function typesFunction() {
    type messageType = string | null | undefined
    let myMessage3: messageType = undefined;
    let testeObMessString: string = <string><unknown>myMessage3;
    let testeObMessString2: number = (myMessage3 as unknown as string).length;
    return testeObMessString2;
}
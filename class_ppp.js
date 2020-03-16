class P {
    constructor() {
        this.hello = 'hello';
    }
    echoHello() {
        console.log(this.hello);
    }
    echoHelloProtect() {
        console.log(this.hello);
    }
    echoHelloPrivate() {
        console.log(this.hello);
    }
    echo() {
        this.echoHello();
        this.echoHelloProtect();
        this.echoHelloPrivate();
    }
}
class PChild extends P {
    echo() {
        this.echoHello();
        this.echoHelloProtect();
        // this.echoHelloPrivate();
    }
}
const p = new P();
p.echoHello();
p.echoHelloProtect();
p.echoHelloPrivate();

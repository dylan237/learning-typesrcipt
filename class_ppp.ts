class P {
  public hello: string = 'hello';

  public echoHello() {
    console.log(this.hello);
  }

  protected echoHelloProtect() {
    console.log(this.hello);
  }

  private echoHelloPrivate() {
    console.log(this.hello);
  }

  public echo() {
    this.echoHello();
    this.echoHelloProtect();
    this.echoHelloPrivate();
  }
}

class PChild extends P {
  public echo() {
    this.echoHello();
    this.echoHelloProtect();
    // this.echoHelloPrivate();
  }
}

const pp = new P();

pp.echoHello();
// p.echoHelloProtect();
// p.echoHelloPrivate();

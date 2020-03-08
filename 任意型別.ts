interface Person {
  name?: string;
  age?: number;
  readonly [propName: string]: string | number;
}

let tom: Person = {
  name: 'Tom',
  age: 25,
  gender: 'male'
};


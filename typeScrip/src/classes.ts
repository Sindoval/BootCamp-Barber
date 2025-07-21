interface IPerson {
  id: number;
  sayMyName(): string;
}

class Person implements IPerson {
  readonly id: number;
  protected name: string;
  private age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  sayMyName(): string {
    return this.name;
  }
}

// mesma coisa que acima
class PersonRefact {
  constructor(
    readonly id: number,
    protected name: string,
    private age: number,
  ) { }
}

class Emplyee extends Person {
  constructor(id: number, name: string, age: number) {
    super(id, name, age)
  }

  whoAmI() {
    return this.name
  }
}
const person = new Person(2, 'Claudio', 21);
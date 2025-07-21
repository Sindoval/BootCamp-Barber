//Type

type Order = {
  productId: string
  price: number
}

type User = {
  firstName: string
  age: number
  email: string
  password?: string
  orders: Order[]
  register(): string
}

const user: User = {
  firstName: 'Jane',
  age: 20,
  email: 'email@email.com',
  orders: [{ productId: '1', price: 200 }],
  register() { return 'a' }
}

const printLog = (message: string) => {
  console.log(message);
}

printLog(user.password!);


// Unions

type Author = {
  books: string[]
}

const author: Author & User = {
  age: 2,
  books: [],
  email: 'sdsdsdsdsdsdsdsd',
  firstName: 'dwsfcc',
  orders: [],
  register() { return 'a' }
}

// Interfaces


interface UserInterface {
  readonly firstName: string, // apenas leitura
  email: string
}

const emailUser: UserInterface = {
  email: 'wesfvcsv',
  firstName: 'vrevwsv'
};
/* 
emailUser.firstName = '12';  error */

interface MathFunc {
  (x: number, y: number): number;
}
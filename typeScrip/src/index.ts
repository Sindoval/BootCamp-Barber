let age: number = 5;

// Intersections
const prodctId: string | number | boolean = false;

// Enum
enum Direction {
  Up = 1,
  Down = 2,
}

const direction = Direction.Up;

// Type Asserction
const productName: any = 'Boné';

let itemId = productName as string;
itemId = <string>productName

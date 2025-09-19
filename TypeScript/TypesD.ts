// Generic Types
/* Generic types allow you to create reusable components that can work with any data type 
    without losing type safety. They are particularly useful for creating functions, classes, 
    or interfaces that can operate on a variety of types.*/

// Generic types are defined using angle brackets (<>) and can accept type parameters.
// Example of a generic function
type GenericFunction<T> = (arg: T) => T;
// Example of a generic class
class GenericClass<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
} 

// Example of a generic interface
interface GenericInterface<T> {
  value: T;
  getValue: () => T;
}

// Example of a generic type alias
type GenericTypeAlias<T> = {
  value: T;
  getValue: () => T;
}

// Example of a generic function
function identity<T>(arg: T): T {
  return arg;
}

// Example of using a generic function
const stringIdentity: GenericFunction<string> = identity; 

const gameScore = [14, 21, 33, 42, 59];
const favoriteColors = ["red", "green", "blue", "yellow"];
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const getLastItem = <T>(array: T[]): T | undefined => {
  return array.length > 0 ? array[array.length - 1] : undefined;
}
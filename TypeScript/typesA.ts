// Nested object types
type User = {
  id: number;
  name: string;
  address: {
    street: string;
    city: string;
    country: string;
  };
};

//Example of a type alias for a nested object
const user: User = {
  id: 1,
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
};


// Another Nested object types
type Address = {
  street: string;
  city: string;
  country: string;
};

type UserA = {
  id: number;
  name: string;
  address: Address;
};

//Another Example of a type alias for a nested object
const userA: UserA = {
  id: 1,
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
};


// Optional properties in nested objects
type UserB = { 
    id: number;
    name: string;
    address?: Address
};

//Example Optional nested object
const userB: UserB = {
  id: 2,
  name: "Jane Doe",
  // address is optional and can be omitted
};


// Typing Arrays of nested objects

// Example of an array of nested objects
const usersA: User[] = [
  {
    id: 1,
    name: "John Doe",
    address: {
      street: "123 Main St",
      city: "Anytown",
      country: "USA",
    },
  },
  {
    id: 2,
    name: "Jane Doe",
    address: {
      street: "123 Main St",
      city: "Anytown",
      country: "USA",
    },
  },
];

const usersB: Array<User> = [
  {
    id: 1,
    name: "John Doe",
    address: {
      street: "123 Main St",
      city: "Anytown",
      country: "USA",
    },
  },
  {
    id: 2,
    name: "Jane Doe",
    address: {
      street: "123 Main St",
      city: "Anytown",
      country: "USA",
    },
  },
];

  

const numberList: number[] = [1, 2, 3, 4, 5];
const stringList: string[] = ["apple", "banana", "cherry"];

//Literal
type Direction = "north" | "south" | "east" | "west";
// Example of using a literal type
const move: Direction = "north"; // Valid
// move = "up"; // Invalid, would cause a TypeScript error



// Function type without parameters and return type
type GetUserName = () => string;

// Function type with parameters and return type
type GetUser = (id: number) => User;

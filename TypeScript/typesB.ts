// Union Types
let userC: string | number;

// Type Narrowing with example
const myFunction = (input: string | number) => {
  if (typeof input === "string") {
    console.log("Input is a string:", input);
  } else if (typeof input === "number") {
    console.log("Input is a number:", input);
  } else {
    console.log("Input is neither a string nor a number");
  }
};



//Function return type with example
const fetchUser = (id: number): User => {
  // Simulate fetching a user
  return {
    id,
    name: "John Doe",
    address: {
      street: "123 Main St",
      city: "Anytown",
      country: "USA",
    },
  };
}

// if a function does not return anything, we can use void as the return type
const logMessage = (message: string): void => {
  console.log(message);
}

//If a function can return a types and also a error
const fetchUserWithError = (id: number): User | Error | undefined => {
  if (id <= 0) {
    return new Error("Invalid user ID");
  }
  // Simulate fetching a user
  return {
    id,
    name: "John Doe",
    address: {
      street: "123 Main St",
      city: "Anytown",
      country: "USA",
    },
  };
};
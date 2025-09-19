//Utility Types
// Utility types are built-in types in TypeScript that help you manipulate types in a more flexible way.
// They allow you to create new types based on existing ones, making it easier to work with complex types.
// Some common utility types include Partial, Readonly, Record, Pick, and Omit.

// Utility Types Example

// Example of a utility type: Partial
// Partial makes all properties of a type optional
// This is useful when you want to create a type that can represent a subset of another type
type PartialUser = Partial<User>;

// Example object using UserD type
const fullUser: User = {
  id: 1,
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "Wonderland",
    country: "Fiction"
  }
};

// Example object using Partial<UserD> type
const partialUser: PartialUser = {
  name: "Bob"
  // id and address are optional here
};


// Example of a utility type: Omit
// Omit allows you to create a type by excluding certain properties from another type
// This is useful when you want to create a type that has all properties of another type except for some specific ones
type OmitUser = Omit<User, 'address'>;

// Example object using Omit<User> type
const userWithoutAddress: OmitUser = {
  id: 1,
  name: "Alice"
  // address is omitted here
};


// Example of a utility type: Readonly
// Readonly makes all properties of a type read-only, meaning they cannot be modified
// This is useful when you want to create a type that should not be changed after creation  
type ReadonlyUser = Readonly<User>;

// Example object using Readonly<User> type
const readonlyUser: ReadonlyUser = {
  id: 1,
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "Wonderland",
    country: "Fiction"
  }
};

// readonlyUser.name = "Bob"; // This will cause an error because name is read-only

// Example of a utility type: Record
// Record allows you to create a type with specific keys and values
// This is useful when you want to create a type that maps keys to specific values
// For example, you can create a type that maps user IDs to their roles
type UserRoles = Record<string, 'admin' | 'user' | 'guest'>;

// Example object using Record<string, 'admin' | 'user' | 'guest'> type
const userRoles: UserRoles = {
  alice: 'admin',
  bob: 'user',
  charlie: 'guest'
};

// Example of a utility type: Pick
// Pick allows you to create a type by selecting specific properties from another type
// This is useful when you want to create a type that has only a subset of properties from another type
type PickUser = Pick<User, 'id' | 'name'>;

// Example object using Pick<User> type
const pickedUser: PickUser = {
  id: 1,
  name: "Alice"
  // address is omitted here
};

// Example of a utility type: NonNullable
// NonNullable removes null and undefined from a type
type NonNullableUser = NonNullable<User | null | undefined>;

// Example object using NonNullable<User> type
const nonNullableUser: NonNullableUser = {
  id: 1,
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "Wonderland",
    country: "Fiction"
  }
};  

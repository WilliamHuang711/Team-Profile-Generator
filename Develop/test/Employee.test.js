// const Employee = require("../lib/Employee");

// test("instantiate Employee instance", () => {
//   const e = new Employee();
//   expect(typeof(e)).toBe("object");
// });

// test("set name via constructor arguments", () => {
//   const name = "Alice";
//   const e = new Employee(name);
//   expect(e.name).toBe(name);
// });

// test("set id via constructor argument", () => {
//   const testValue = 100;
//   const e = new Employee("Foo", testValue);
//   expect(e.id).toBe(testValue);
// });

// test("set email via constructor argument", () => {
//   const testValue = "test@test.com";
//   const e = new Employee("Foo", 1, testValue);
//   expect(e.email).toBe(testValue);
// });

// test("get name via getName()", () => {
//   const testValue = "Alice";
//   const e = new Employee(testValue);
//   expect(e.getName()).toBe(testValue);
// });

// test("get id via getId()", () => {
//   const testValue = 100;
//   const e = new Employee("Foo", testValue);
//   expect(e.getID()).toBe(testValue);
// });

// test("get email via getEmail()", () => {
//   const testValue = "test@test.com";
//   const e = new Employee("Foo", 1, testValue);
//   expect(e.getEmail()).toBe(testValue);
// });

// test("getRole() should return \"Employee\"", () => {
//   const testValue = "Employee";
//   const e = new Employee("Alice", 1, "test@test.com");
//   expect(e.getRole()).toBe(testValue);
// });
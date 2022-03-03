const Employee = require("../lib/Employee");

test("Should be able to create Employee object", () => {
  const name = "Ernest Paul";
  const id = 3;
  const email = "ernestpaul88@fakemail.com";
  const employee = new Employee(name, id, email);
  expect(employee.getName()).toBe(name);
  expect(employee.getId()).toBe(id);
  expect(employee.getEmail()).toBe(email);
  expect(employee.getRole()).toBe("Employee");

  expect(employee.name).toBe(name);
  expect(employee.id).toBe(id);
  expect(employee.email).toBe(email);
});

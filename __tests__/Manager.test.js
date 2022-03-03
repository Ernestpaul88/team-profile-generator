const Manager = require("../lib/Manager");

test("Should be able to create Manager object", () => {
  const name = "Ernest";
  const id = 1;
  const email = "ernestpaul88@fakemail.com";
  const officeNumber = 10;
  const manager = new Manager(name, id, email, officeNumber);
  expect(manager.getRole()).toBe("Manager");
  expect(manager.getOffice()).toBe(officeNumber);
  expect(manager.office).toBe(officeNumber);
});

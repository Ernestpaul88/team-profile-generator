const Intern = require("../lib/Intern");

test("Should be able to create Intern object", () => {
  const name = "Ernest";
  const id = 1;
  const email = "ernestpaul88@fakemail.com";
  const school = "ZUniversity";
  const intern = new Intern(name, id, email, school);
  expect(intern.getRole()).toBe("Intern");
  expect(intern.getSchool()).toBe(school);
  expect(intern.school).toBe(school);
});

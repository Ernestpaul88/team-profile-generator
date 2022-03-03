const Engineer = require("../lib/Engineer");

test("Should be able to create Engineer object", () => {
  const name = "Ernest";
  const id = 1;
  const email = "ernestpaul88@fakemail.com";
  const github = "https://github.com/ernestpaul88";
  const engineer = new Engineer(name, id, email, github);
  expect(engineer.getRole()).toBe("Engineer");
  expect(engineer.getGithub()).toBe(github);
  expect(engineer.github).toBe(github);
});

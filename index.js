const inquirer = require("inquirer");
const { writeFile } = require("./utils/generate-site.js");
const generatePage = require("./src/page-template.js");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
var team = [];

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your manager's name?(Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please provide your managers name!.");
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "What is your manager's id number?(Required)",
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please provide your managers id number!.");
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your managers email address?(Required)",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please provide your managers email address!.");
      }
    },
  },
  {
    type: "input",
    name: "office",
    message: "What is your managers office number?(Required)",
    validate: (officeInput) => {
      if (officeInput) {
        return true;
      } else {
        console.log("Please provide your managers office number!.");
      }
    },
  },
];

const employeeQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the team members name?(Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please provide the employees name!.");
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "What is the team members id?(Required)",
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please provide the employees id!.");
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the team members email address?(Required)",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please provide the employees email address!.");
      }
    },
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "github",
    message: "What is the team members GitHub username?(Required)",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please provide the engineer's GitHub username!.");
      }
    },
  },
];

const internQuestions = [
  {
    type: "input",
    name: "school",
    message: "Where does this team members go to school?(Required)",
    validate: (schoolInput) => {
      if (schoolInput) {
        return true;
      } else {
        console.log("Please provide the Intern's School!.");
      }
    },
  },
];

const confirmQuestion = [
  {
    type: "confirm",
    name: "confirmAddmember",
    message: "Would you like to add a new team member?",
    default: true,
  },
];

const addNewEmployee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is the next team members role or job title(Required)?",
        choices: ["Engineer", "Intern"],
        validate: (roleInput) => {
          if (roleInput) {
            return true;
          } else {
            console.log("Please provide the employees role!.");
          }
        },
      },
    ])
    .then((answer) => {
      if (answer.role == "Engineer") {
        return addEngineer();
      } else if (answer.role == "Intern") {
        return addIntern();
      }
    });
};

const addEngineer = () => {
  let questions = [
    ...employeeQuestions,
    ...engineerQuestions,
    ...confirmQuestion,
  ];

  inquirer.prompt(questions).then((answers) => {
    const engineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );
    team.push(engineer);
    if (answers.confirmAddmember) {
      return addNewEmployee();
    } else {
      return writeFile(generatePage(team));
    }
  });
};

const addIntern = () => {
  let questions = [
    ...employeeQuestions,
    ...internQuestions,
    ...confirmQuestion,
  ];

  inquirer.prompt(questions).then((answers) => {
    const intern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    team.push(intern);
    if (answers.confirmAddmember) {
      return addNewEmployee();
    } else {
      return writeFile(generatePage(team));
    }
  });
};

function init() {
  inquirer
    .prompt(managerQuestions)
    .then((managerAnswers) => {
      const manager = new Manager(
        managerAnswers.name,
        managerAnswers.id,
        managerAnswers.email,
        managerAnswers.office
      );
      team.push(manager);
    })
    .then(addNewEmployee);
}

// Function call to initialize app
init();

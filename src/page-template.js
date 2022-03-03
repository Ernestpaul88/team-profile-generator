const generateCards = (team) => {
  let cards = [];
  team
    .filter((employee) => employee.getRole() === "Manager")
    .map((manager) => {
      cards.push(generateManagerCard(manager));
    });
  team
    .filter((employee) => employee.getRole() === "Engineer")
    .map((engineer) => {
      cards.push(generateEngineerCard(engineer));
    });
  team
    .filter((employee) => employee.getRole() === "Intern")
    .map((intern) => {
      cards.push(generateInternCard(intern));
    });
  return cards.join(``);
};

const generateManagerCard = (Manager) => {
  return `
  <div class="col-md-4 col-sm-12 card-item">
  <div class="card m-3 shadow-lg">
    <div class="fw-bold card-header">
      <p>${Manager.getName()}</p>
      <p>
        <i class="bx bxs-coffee"></i>
        Manager
      </p>
    </div>
    <ul class="list-group p-4">
      <li class="list-group-item">ID: ${Manager.getId()}</li>
      <li class="list-group-item">
        Email:
        <a href="mailto: ${Manager.getEmail()}">${Manager.getEmail()}</a>
      </li>
      <li class="list-group-item">Office number: ${Manager.getOffice()}</li>
    </ul>
  </div>
</div>`;
};

const generateEngineerCard = (Engineer) => {
  return `
  <div class="col-md-4 col-sm-12 card-item">
  <div class="card m-3 shadow-lg">
    <div class="fw-bold card-header">
      <p>${Engineer.getName()}</p>
      <p>
        <i class="bx bx-code-block"></i>
        Engineer
      </p>
    </div>
    <ul class="list-group p-4">
      <li class="list-group-item">ID: ${Engineer.getId()}</li>
      <li class="list-group-item">
        Email:
        <a href="mailto: ${Engineer.getEmail()}">${Engineer.getEmail()}</a>
      </li>
      <li class="list-group-item">
        Github: <a href="https://github.com/${Engineer.getGithub()}">${Engineer.getGithub()}</a>
      </li>
    </ul>
  </div>
</div>`;
};

const generateInternCard = (Intern) => {
  return `
  <div class="col-md-4 col-sm-12 card-item">
  <div class="card m-3 shadow-lg">
    <div class="fw-bold card-header">
      <p>${Intern.getName()}</p>
      <p>
        <i class="bx bxs-graduation"></i>
        Intern
      </p>
    </div>
    <ul class="list-group p-4">
      <li class="list-group-item">ID: ${Intern.getId()}</li>
      <li class="list-group-item">
        Email:
        <a href="mailto: ${Intern.getEmail()}">${Intern.getEmail()}</a>
      </li>
      <li class="list-group-item">School: ${Intern.getSchool()}</li>
    </ul>
  </div>
</div>`;
};

module.exports = (data) => {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content="add content here" />
    <!-- Always include this line of code!!! -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="./vendor/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="./vendor/boxicons/css/boxicons.min.css" />
    <link rel="stylesheet" href="./styles.css" />

    <title>Team Profile</title>
  </head>
  <body class="pt-5">
    <header>
      <nav class="navbar navbar-custom fixed-top justify-content-center mb-5">
        <h1 class="text-center"><b>My Team</b></h1>
      </nav>
    </header>
    <main class="mt-5">
      <section class="team-gallery container p-5 mb-5">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center">
            ${generateCards(data)}
          </div>
        </div>
      </section>
    </main>
    <footer class="footer py-4 bg-light fixed-bottom">
      <div class="container text-center">
        <span class="text-muted">&copy; ${new Date().getFullYear()} by Ernest Paul</span>
      </div>
    </footer>
    <script src="./vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  </body>
</html>`;
};

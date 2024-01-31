var projectsList;
if (localStorage.getItem("projectsList") === null) {
  projectsList = [];
} else {
  projectsList = JSON.parse(localStorage.getItem("projectsList"));
}

let projects = document.getElementById("design");

var htmlDesign = projectsList
  .map((element, index) => {
    console.log(element);
    return `
    <div class='design-information'>
      <div class='design-information-top' style="width="200px" heigth="200px"">
        <img class="image" src='${element.url}'/>
      </div>
      <div class='design-information-button'>
        <div class='left'>
          <h4>${element.name}</h4>
          <p>${element.tags}</p>
        </div>
        <div class='right'>
          <span class='material-symbols-outlined'>arrow_forward</span>
        </div>
      </div>
    </div>
  `;
  })
  .join("");

document.getElementById("design").innerHTML = htmlDesign;

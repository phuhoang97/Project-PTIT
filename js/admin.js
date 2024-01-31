//Validate Add Product Form:
function validateForm() {
  var name = document.getElementById("name").value;
  var url = document.getElementById("url").value;
  var link = document.getElementById("link").value;
  var tags = document.getElementById("tags").value;

  if (name === "") {
    alert("Please enter a name!");
    return false;
  }
  if (url === "") {
    alert("Please enter all the field!");
    return false;
  } else if (link === "") {
    alert("Please enter all the field!");
  }
  return true;
}

// Show data:

function showData() {
  var projectsList;
  if (localStorage.getItem("projectsList") === null) {
    projectsList = [];
  } else {
    projectsList = JSON.parse(localStorage.getItem("projectsList"));
  }

  var htmlProducts = "";
  projectsList.forEach(function (element, index) {
    htmlProducts += `
        <tr>
            <td>${element.name}</td>
            <td><img width="200px" heigth="200px" src="${element.url}"/></td>
            <td>${element.link}</td>
            <td><div>${element.tags}</div></td>
            <td>
                <button onclick="deleteData(${index})" class="btn btn-danger">Delete</button>
                <button onclick="updateData(${index})" class="btn btn-success">Update</button>
            </td>
        </tr>
    `;
  });

  document.querySelector("#crudTable tbody").innerHTML = htmlProducts;
}

document.onload = showData();

// Add product:

function addData() {
  if (validateForm() === true) {
    var name = document.getElementById("name").value;
    var url = document.getElementById("url").value;
    var link = document.getElementById("link").value;
    var tags = document.getElementById("tags").value;

    var projectsList;

    if (localStorage.getItem("projectsList") === null) {
      projectsList = [];
    } else {
      projectsList = JSON.parse(localStorage.getItem("projectsList"));
    }

    projectsList.push({
      name: name,
      url: url,
      link: link,
      tags: tags,
    });

    localStorage.setItem("projectsList", JSON.stringify(projectsList));
    showData();

    document.getElementById("name").value = "";
    document.getElementById("url").value = "";
    document.getElementById("link").value = "";
    document.getElementById("tags").value = "";
  }
}

// Delete product:

function deleteData(index) {
  var projectsList;
  if (localStorage.getItem("projectsList" === null)) {
    projectsList = [];
  } else {
    projectsList = JSON.parse(localStorage.getItem("projectsList"));
  }

  projectsList.splice(index, 1);
  localStorage.setItem("projectsList", JSON.stringify(projectsList));
  showData();
}

// Update product:
function updateData(index) {
  document.getElementById("Submit").style.display = "none";
  document.getElementById("Update").style.display = "block";

  var projectsList;
  if (localStorage.getItem("projectsList" === null)) {
    projectsList = [];
  } else {
    projectsList = JSON.parse(localStorage.getItem("projectsList"));
  }

  document.getElementById("name").value = projectsList[index].name;
  document.getElementById("url").value = projectsList[index].url;
  document.getElementById("link").value = projectsList[index].link;
  document.getElementById("tags").value = projectsList[index].tags;

  document.querySelector("#Update").onclick = function () {
    if (validateForm() === true) {
      projectsList[index].name = document.getElementById("name").value;
      projectsList[index].url = document.getElementById("url").value;
      projectsList[index].link = document.getElementById("link").value;
      projectsList[index].tags = document.getElementById("tags").value;

      localStorage.setItem("projectsList", JSON.stringify(projectsList));
      showData();

      document.getElementById("name").value = "";
      document.getElementById("url").value = "";
      document.getElementById("link").value = "";
      document.getElementById("tags").value = "";

      document.getElementById("Submit").style.display = "block";
      document.getElementById("Update").style.display = "none";
    }
  };
}

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Michael",
  lastName: "Scofield",
  age: 31,
  location: "Fox River"
};

const student2: Student = {
  firstName: "Walter",
  lastName: "White",
  age: 50,
  location: "Albuquerque"
};

const studentsList: Student[] = [student1, student2];

var table = document.createElement('table');
var tbody = document.createElement('tbody');

table.style.background = "purple";
table.appendChild(tbody);

studentsList.forEach((student: Student) : void => {
  const row = document.createElement('tr');
  const nameCol = document.createElement('td');
  const locationCol = document.createElement('td');

  nameCol.textContent = student.firstName;
  locationCol.textContent = student.location;

  nameCol.style.border = "2px solid black";
  locationCol.style.border = "2px solid white";
  nameCol.style.padding = "4 px";
  locationCol.style.padding = "4 px";

  row.appendChild(nameCol);
  row.appendChild(locationCol);
  tbody.appendChild(row);
});

document.body.appendChild(table);

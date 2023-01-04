var student1 = {
    firstName: "Michael",
    lastName: "Scofield",
    age: 31,
    location: "Fox River"
};
var student2 = {
    firstName: "Walter",
    lastName: "White",
    age: 50,
    location: "Albuquerque"
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var tbody = document.createElement('tbody');
table.style.background = "purple";
table.appendChild(tbody);
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var nameCol = document.createElement('td');
    var locationCol = document.createElement('td');
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

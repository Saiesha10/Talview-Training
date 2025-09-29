
let students = [
  { id: 1, name: "A", marks: 85 },
  { id: 2, name: "B", marks: 72 },
  { id: 3, name: "C", marks: 90 }
];

function displayStudents() {
  console.log("Student List");
  students.forEach(s => console.log(s.id + ". " + s.name + " - " + s.marks));
}

function addStudent(id, name, marks) {
  students.push({ id, name, marks });
}

function Topper() {
  let topper = students.reduce((max, s) => (s.marks > max.marks ? s : max));
  console.log("Topper:", topper.name, "with", topper.marks, "marks");
}

displayStudents();
addStudent(4, "D", 95);
displayStudents();

Topper();

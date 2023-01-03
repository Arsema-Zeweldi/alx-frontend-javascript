export default function updateStudentGradeByCity(list, city, newGrades) {
  const filterList = list.filter((student) => student.location === city);
  for (const student of filterList) {
    student.grade = 'N/A';
  }
  const grades = filterList.map((student) => {
    for (const grade of newGrades) {
      if (student.id === grade.studentId) {
        student.grade = grade.grade;
      }
    }
    return student;
  });
  return grades;
}

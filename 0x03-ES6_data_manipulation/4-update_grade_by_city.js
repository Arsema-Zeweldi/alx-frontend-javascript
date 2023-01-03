export default function updateStudentGradeByCity(list, city, newGrades) {
  const mapList = list.map((student) => {
    const grade = newGrades.filter((key) => key.studentId === student.id)
      .map((value) => value.grade)[0];
    student['grade'] = grade || 'N/A';
    return student;
  });
  return mapList.filter((key) => key.location === city);
}

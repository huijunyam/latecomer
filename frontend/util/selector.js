export const filteredCalendar = (filteredStudents) => {
  let showedStudent = [];
  for (let i = 0; i < filteredStudents.length; i++) {
    while (filteredStudents[i].dates.length > 0) {
      const dateStr = filteredStudents[i].dates.pop();
      showedStudent.push({ id: filteredStudents[i].id, title: `${filteredStudents[i].classroom.name}, ${filteredStudents[i].name}`,
        start: dateStr, end: dateStr, url: `/#/student/${filteredStudents[i].id}`});
    }
  }
  return showedStudent;
};


export const filteredGraph = students => {
  let filteredDates = {};
  for (let i = 0; i < students.length; i++) {
    while (students[i].dates.length > 0) {
      const date = students[i].dates.pop();
      if (filteredDates[date] !== undefined) {
        filteredDates[date] += 1;
      } else {
        filteredDates[date] = 1;
      }
    }
  }
  return filteredDates;
};

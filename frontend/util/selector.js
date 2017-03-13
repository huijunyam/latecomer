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


const compareFromDate = (specificDate, date2) => {
  let fromDateArr = specificDate.split("-").map(el => parseInt(el));
  let toDateArr = date2.split("-").map(el => parseInt(el));
  for (let i = 0; i < 3; i++){
    if (fromDateArr[i] > toDateArr[i]) {
      return false;
    }
  }
  return true;
};

const compareToDate = (specificDate, date2) => {
  let fromDateArr = specificDate.split("-").map(el => parseInt(el));
  let toDateArr = date2.split("-").map(el => parseInt(el));
  for (let i = 0; i < 3; i++){
    if (fromDateArr[i] < toDateArr[i]) {
      return false;
    }
  }
  return true;
};

export const filteredGraph = (students, fromDate, toDate) => {
  let filteredDates = {};
  let array = [];
  for (let i = 0; i < students.length; i++) {
    while (students[i].dates.length > 0) {
      const date = students[i].dates.pop();
      if (compareFromDate(fromDate, date) && compareToDate(toDate, date)) {
        if (filteredDates[date] !== undefined) {
          filteredDates[date] += 1;
        } else {
          filteredDates[date] = 1;
        }
      }
    }
  }
  Object.keys(filteredDates).forEach(key => {
    array.push({ date: key, frequency: filteredDates[key] });
  });
  return array;
};

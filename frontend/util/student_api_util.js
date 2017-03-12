export const createStudent = student => (
  $.ajax({
    method: "POST",
    url: "api/students",
    data: { student }
  })
);

export const updateStudent = student => (
  $.ajax({
    method: "PATCH",
    url: `api/students/${student.id}`,
    data: { student }
  })
);

export const deleteStudent = id => (
  $.ajax({
    method: "DELETE",
    url: `api/students/${id}`
  })
);

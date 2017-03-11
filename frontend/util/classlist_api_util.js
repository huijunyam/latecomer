export const fetchClasses = () => (
  $.ajax({
    method: 'GET',
    url: 'api/class_names'
  })
);

export const fetchClass = id => (
  $.ajax({
    method: 'GET',
    url: `api/class_names/${id}`
  })
);

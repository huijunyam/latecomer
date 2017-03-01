@students.each do |student|
  json.set! student.id do
    json.partial! "api/students/student", student: student
  end
end

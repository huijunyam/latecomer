# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: "hjyam", password: "password");

class1 = ClassName.create(name: "4b")
class2 = ClassName.cretae(name: "4p")

student1 = Student.create(name: "huijun", "lateness": 0, class_id: class1.id)
student2 = Student.create(name: "huixuan", "lateness": 1, class_id: class1.id)
student3 = Student.create(name: "seiktee", "lateness": 0, class_id: class2.id)
student4 = Student.create(name: "kokhong", "lateness": 0, class_id: class1.id)
student5 = Student.create(name: "alice", "lateness": 4, class_id: class2.id)

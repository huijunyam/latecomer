class ClassName < ActiveRecord::Base
  validates :name, presence: true

  has_many :students,
    primary_key: :id,
    foreign_key: :class_id,
    class_name: :Student
end

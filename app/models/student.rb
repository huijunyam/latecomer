class Student < ActiveRecord::Base
  validates :name, :lateness, :class_id, presence: true

  belongs_to :classroom,
    primary_key: :id,
    foreign_key: :class_id,
    class_name: :ClassName
end

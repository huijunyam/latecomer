class Student < ActiveRecord::Base
  validates :name, :lateness, presence: true

  belongs_to :class,
    primary_key: :id,
    foreign_key: :class_id,
    class_name: :ClassName
end

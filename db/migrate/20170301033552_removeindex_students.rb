class RemoveindexStudents < ActiveRecord::Migration[5.0]
  def change
    remove_index :students, [:class_id]
  end
end

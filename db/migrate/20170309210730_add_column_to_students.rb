class AddColumnToStudents < ActiveRecord::Migration[5.0]
  def change
    add_column :students, :dates, :string, array:true, default: []
  end
end

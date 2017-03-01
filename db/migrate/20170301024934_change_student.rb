class ChangeStudent < ActiveRecord::Migration[5.0]
  def change
    remove_column :students, :class
    add_column :students, :class_id, :integer
  end
end

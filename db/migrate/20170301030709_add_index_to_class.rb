class AddIndexToClass < ActiveRecord::Migration[5.0]
  def change
    add_index(:students, [:class_id])
  end
end

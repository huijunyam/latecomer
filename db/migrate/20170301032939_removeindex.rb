class Removeindex < ActiveRecord::Migration[5.0]
  def change
    remove_index :class_names, [:name]
  end
end

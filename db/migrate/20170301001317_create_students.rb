class CreateStudents < ActiveRecord::Migration[5.0]
  def change
    create_table :students do |t|
      t.string :name, null: false
      t.string :class, null: false
      t.integer :lateness, null: false, default: 0
      t.timestamps
    end
    add_index(:students, [:name, :class, :lateness])
  end
end

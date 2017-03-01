class CreateClassNames < ActiveRecord::Migration[5.0]
  def change
    create_table :class_names do |t|
      t.string :name, null: false
      t.timestamps
    end
    add_index(:class_names, :name, unique: true)
  end
end

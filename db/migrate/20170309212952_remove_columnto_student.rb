class RemoveColumntoStudent < ActiveRecord::Migration[5.0]
  def change
    remove_column :students, :dates, :string

  end
end

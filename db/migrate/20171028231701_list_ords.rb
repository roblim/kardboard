class ListOrds < ActiveRecord::Migration[5.1]
  def change
    add_column :lists, :ord, :integer
  end
end

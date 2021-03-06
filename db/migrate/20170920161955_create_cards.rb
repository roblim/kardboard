class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :title, null: false
      t.text :description
      t.datetime :due_date
      t.integer :list_id, null: false
      t.timestamps
    end
    add_index :cards, :list_id
  end
end

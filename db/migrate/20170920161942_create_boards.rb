class CreateBoards < ActiveRecord::Migration[5.1]
  def change
    create_table :boards do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
      t.boolean :starred, default: false
      t.timestamps
    end
    add_index :boards, :user_id
  end
end

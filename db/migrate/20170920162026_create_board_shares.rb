class CreateBoardShares < ActiveRecord::Migration[5.1]
  def change
    create_table :board_shares do |t|
      t.integer :board_id, null: false
      t.integer :collaborator_id, null: false
      t.boolean :starred, default: false
      t.timestamps
    end
    add_index :board_shares, [:board_id, :collaborator_id], unique: true
  end
end

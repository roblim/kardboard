class RenameUserIdToOwnerId < ActiveRecord::Migration[5.1]
  def change
    rename_column :boards, :user_id, :owner_id
  end
end

# == Schema Information
#
# Table name: board_shares
#
#  id              :integer          not null, primary key
#  board_id        :integer          not null
#  collaborator_id :integer          not null
#  starred         :boolean          default(FALSE)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class BoardShare < ApplicationRecord
  validates :board_id, :collaborator_id, presence: true
  validates :board_id, uniqueness: { scope: :collaborator_id }

  belongs_to :collaborator,
              foreign_key: :collaborator_id,
              primary_key: :id,
              class_name: :User

  belongs_to :board

  has_one :owner, through: :board
end

# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  board_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class List < ApplicationRecord
  validates :title, :board_id, presence: true

  belongs_to :board, dependent: :destroy
  has_many :comments
  has_many :board_shares

end

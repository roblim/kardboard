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
  before_create :assign_next_ord

  belongs_to :board
  has_many :comments
  has_many :board_shares

  private
  def assign_next_ord
    board = self.board
    sister_lists = board.lists
    max_ord = sister_lists.map { |list| list.ord }.max
    max_ord ? self.ord = max_ord + 1 : self.ord = 0
  end

end

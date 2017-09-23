# == Schema Information
#
# Table name: boards
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  owner_id   :integer          not null
#  starred    :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Board < ApplicationRecord
  validates :title, :owner_id, presence: true

  belongs_to :owner, dependent: :destroy,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

  has_many :lists
  has_many :board_shares

end

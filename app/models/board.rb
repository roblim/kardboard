# == Schema Information
#
# Table name: boards
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  user_id    :integer          not null
#  starred    :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Board < ApplicationRecord
  validates :title, :user_id, presence: true

  belongs_to :user
  has_many :lists
  
end

# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  card_id    :integer          not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :body, :card_id, :author_id, presence: true

  belongs_to :author,
              foreign_key: :author_id,
              primary_key: :id,
              class_name: :User

  belongs_to :card
end

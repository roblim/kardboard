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

require 'test_helper'

class BoardShareTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

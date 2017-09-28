class Api::BoardSharesController < ApplicationController
  def index
    @board_shares = BoardShare.where(collaborator_id: params[:user_id])
    @boards = []
    @board_shares.each do |board_share|
      @boards << Board.find_by_id(board_share.board_id)
    end
    collaborators = []
    @board_shares
    render :index
  end

  def create
  end

  def destroy
  end

  private

  def board_share_params
    params.require(:board_share).permit(:board_id, :collaborator_id, :starred)
  end
end

class Api::BoardSharesController < ApplicationController
  def index
    @board_shares = BoardShare.where(collaborator_id: params[:user_id])
    @boards = []
    @board_shares.each do |board_share|
      @boards << Board.find_by_id(board_share.board_id)
    end
    render 'api/boards/index'
  end

  def get_collaborators
    @users = Board.find_by_id(params[:board_id]).collaborators
    render "api/users/index"
  end

  def create
    @board_share = BoardShare.new(board_id: params[:board_id],
                                  collaborator_id: params[:collaborator_id])
    @collaborator = User.find_by_id(params[:collaborator_id])
    if @board_share.save
      render :show
    else
      render json: @board_share.errors.full_messages, status: 400
    end
  end

  def destroy
    @board_share = BoardShare.where(board_id: params[:board_id],
                                    collaborator_id: params[:collaborator_id]).first
    @board_share = @board_share.destroy
    @collaborator = User.find_by_id(params[:collaborator_id])
    render :show
  end

  private

  def board_share_params
    params.require(:board_share).permit(:board_id, :collaborator_id, :starred)
  end
end

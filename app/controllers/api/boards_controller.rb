class Api::BoardsController < ApplicationController
  def index
    @boards = Board.where(owner_id: params[:user_id])
    render :index
  end

  def create
    @board = Board.new(board_params)
    if @board.save
      render :show
    else
      render json: @board.errors.full_messages, status: 400
    end
  end

  def show
    @board = Board.find_by_id(params[:id])
    if @board
      render :show
    else
      render json: ["Board does not exist"], status: 404
    end
  end

  def update
    @board = Board.find_by_id(params[:id])
    render json: ['Board does not exist'], status: 404 and return unless @board
    @board.update_attributes(board_params)
    if @board.save
      render :show
    else
      render json: @board.errors.full_messages, status: 400
    end
  end

  def destroy
    @board = Board.find_by_id(params[:id])
    render json: ['Board does not exist'], status: 404 and return unless @board
    @board = @board.destroy
    render :show
  end

  private

  def board_params
    params.require(:board).permit(:title, :owner_id, :starred)
  end
end

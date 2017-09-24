class Api::ListsController < ApplicationController
  def index
    @lists = List.where(board_id: params[:board_id])
    render :index
  end

  def create
    @list = List.new(list_params)
    if @list.save
      render :show
    else
      render json: @list.errors.full_messages, status: 400
    end
  end

  def update
    @list = List.find_by_id(params[:id])
    render json: ['List does not exist'], status: 404 and return unless @list
    @list.update_attributes(list_params)
    if @list.save
      render :show
    else
      render json: @list.errors.full_messages, status: 400
    end
  end

  def destroy
    @list = List.find_by_id(params[:id])
    render json: ['List does not exist'], status: 404 and return unless @list
    @list = @list.destroy
    render :show
  end

  private

  def list_params
    params.require(:list).permit(:title, :board_id)
  end

end

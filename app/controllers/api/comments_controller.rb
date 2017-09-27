class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.where(card_id: params[:card_id])
    render :index
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 400
    end
  end

  def update
    @comment = Comment.find_by_id(params[:id])
    render json: ["Comment does not exist"], status: 404 and return unless @comment
    @comment.update_attributes(comment_params)
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 400
    end
  end

  def destroy
    @comment = Comment.find_by_id(params[:id])
    render json: ["Comment does not exist"], status: 404 and return unless @comment
    @comment = @comment.destroy
    render :show
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :card_id, :author_id, :created_at, :updated_at)
  end
end

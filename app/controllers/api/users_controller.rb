class Api::UsersController < ApplicationController
  def index
    @authors = Card.find_by_id(params[:card_id]).authors
    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 403
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end

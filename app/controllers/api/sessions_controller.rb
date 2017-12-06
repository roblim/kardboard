class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      log_in(@user)
      render "api/users/show"
    else
      render json: ['Invalid username or password.'], status: 401
    end
  end

  def destroy
    unless current_user
      render json: ['No logged in user to log out.'], status: 404
      return
    end
    log_out
    render json: {}
  end
end

class UsersController < ApplicationController
  def new
    @user = User.new
  end

  # Fat models, thin controllers.

  def create
    @user = User.new user_params
    if @user.save # returns true on success
      redirect_to root_path
    else
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end

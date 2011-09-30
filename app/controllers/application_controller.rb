class ApplicationController < ActionController::Base
  protect_from_forgery

  before_filter :load_menu
  
  def load_menu
    @posts = Post.find(:all, :limit => 10, :order => "created_at DESC")
  end
end

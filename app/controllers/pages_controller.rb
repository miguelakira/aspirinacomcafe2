class PagesController < ApplicationController
  def index
    @posts = Post.all.last(5).reverse
  end
end

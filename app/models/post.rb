class Post < ActiveRecord::Base
  belongs_to :category
  belongs_to :user

  has_one :review
end

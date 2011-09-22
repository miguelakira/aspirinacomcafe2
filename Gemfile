source 'http://rubygems.org'

gem 'rails', '3.1.0'

gem 'rails_admin', :git => 'git://github.com/sferik/rails_admin.git'
gem 'devise'

gem 'formtastic', '2.0.0.rc5'
gem 'execjs'
gem 'therubyracer'

# Bundle edge Rails instead:
# gem 'rails',     :git => 'git://github.com/rails/rails.git'

gem "thin"
gem 'tinymce-rails'


group :production do
  gem 'pg'
end
group :development, :test do
  gem 'mysql'
end

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails', "  ~> 3.1.0"
  gem 'coffee-rails', "~> 3.1.0"
  gem 'uglifier'
end

gem 'jquery-rails'


# To use debugger
# gem 'ruby-debug19', :require => 'ruby-debug'

group :test do
  # Pretty printed test output
  gem 'turn', :require => false
end

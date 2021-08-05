class PagesController < ApplicationController
  def home
    @brother = %w( Groucho Harpo Chico ).sample
    @time = Time.now
    @uptime = `uptime` # Backticks won't work on Heroku
  end
end

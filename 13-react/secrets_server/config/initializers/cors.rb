# This config jacked from rack-cors Github README (which see)

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*' # this needs an explicit list of your URLs on heroku
    resource '*',
      :headers => :any,
      :methods => %i( get post put patch delete options head ) # array of symbols
  end
end

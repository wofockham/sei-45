require 'sinatra'
require 'sinatra/reloader'

# Routes
# Paths

get '/' do
  "wow -- this is the homepage -- hotdogs"
end

get '/hello' do
  "Hello world from Sinatra" # implicitly returned
end

get '/goodbye' do
  "Goodbye Cruel World"
end

# Dynamic content:
get '/lucky_number' do
  "Here is your lucky number: #{ rand 1..40 }"
end

get '/uptime' do
  "The server uptime is #{ `uptime` }"
end

# Marx Brothers Fan Club

# An infinite number of URLs
get '/fanclub/:name' do
  "#{ params[:name].capitalize } is a member of the Marx Brothers Fan Club"
end

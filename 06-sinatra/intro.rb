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
get '/fanclub/:name' do # $5000
  "#{ params[:name].capitalize } is a member of the Marx Brothers Fan Club"
end

get '/fanclub/:first/:last' do # $10000
  "#{ params[:first].capitalize } #{ params[:last].upcase } is a premium member of the MBFC."
end

get '/fanclub/:first/:last/:favorite' do # $50000
  "#{ params[:first].capitalize } #{ params[:last].upcase } is a platinum member of the MBFC and their favorite brother is #{ params[:favorite].capitalize }."
end

# Second crappiest calculator of the course
# /multiply/5/3 => 15
get '/multiply/:x/:y' do
  result = params[:x].to_f * params[:y].to_f
  "The result is <strong>#{ result }</strong>"
end

# Two serious complaints:
# WHERE IS THE HTML?!
# How do we get user input without making the poor slobs edit the URL by hand?

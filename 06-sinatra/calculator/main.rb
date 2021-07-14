require 'sinatra'
require 'sinatra/reloader'

# ERB: Embedded Ruby: HTML with chunks of Ruby in it

get '/' do
  erb :home
end

get '/result' do
  x = params[:x].to_f
  y = params[:y].to_f

  @result = case params[:operator] # instance variable
  when '+' then x + y
  when '-' then x - y
  when '*' then x * y
  when '/' then x / y
  end

  puts "The result is #{ @result }" # It appears in the terminal

  erb :result
end

# Sinatra doesn't know this ditty

require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# INDEX: Show ALL butterflies
get '/butterflies' do
  @butterflies = query_db 'SELECT * FROM butterflies'
  erb :butterflies_index
end

# NEW: The form for a new butterfly
get '/butterflies/new' do
  erb :butterflies_new
end

# CREATE: Insert a new butterfly into the database
post '/butterflies' do
  # insert the new butterfly into the database
  query_db "INSERT INTO butterflies (name, family, image) VALUES ('#{ params[:name] }', '#{ params[:family] }', '#{ params[:image] }')"
  redirect to('/butterflies') # GET request
end

# SHOW: Show A SINGLE butterfly
get '/butterflies/:id' do
  @butterfly = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
  @butterfly = @butterfly.first # Extract the single hash from the array.
  erb :butterflies_show
end

def query_db(sql_statement)
  puts sql_statement # Optional but very nice for debugging.
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results # implicit return
end

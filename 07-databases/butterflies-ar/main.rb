require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'
require 'pry'

# Rails will do this for you automatically:
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Optional bonus:
ActiveRecord::Base.logger = Logger.new(STDERR)

# Class backed by a database table is called a Model
class Butterfly < ActiveRecord::Base
  belongs_to :plant, :optional => true
end

class Plant < ActiveRecord::Base
  has_many :butterflies
end

# SECRET POWER USER ROUTE (DON'T TELL ANYONE ABOUT THIS)
get '/pry' do
  binding.pry
end

get '/' do
  erb :home
end

# INDEX: Show ALL butterflies
get '/butterflies' do
  @butterflies = Butterfly.all # array
  erb :butterflies_index
end

# NEW: The form for a new butterfly
get '/butterflies/new' do
  erb :butterflies_new
end

# CREATE: Insert a new butterfly into the database
post '/butterflies' do
  butterfly = Butterfly.new
  butterfly.name = params[:name]
  butterfly.family = params[:family]
  butterfly.image = params[:image]
  butterfly.save
  redirect to("/butterflies/#{ butterfly.id }") # Show page
end

# SHOW: Show A SINGLE butterfly
get '/butterflies/:id' do
  @butterfly = Butterfly.find params[:id] # single object
  erb :butterflies_show
end

# EDIT: Form to edit an existing butterfly
get '/butterflies/:id/edit' do
  @butterfly = Butterfly.find params[:id]
  erb :butterflies_edit
end

# UPDATE: Update an existing butterfly with new information
post '/butterflies/:id' do
  butterfly = Butterfly.find params[:id]
  butterfly.name = params[:name]
  butterfly.family = params[:family]
  butterfly.image = params[:image]
  butterfly.save
  redirect to("/butterflies/#{ params[:id] }") # GET
end

# DESTROY: Delete a butterfly from the database
get '/butterflies/:id/delete' do
  butterfly = Butterfly.find params[:id]
  butterfly.destroy
  redirect to('/butterflies')
end

# Plants CRUD ##################################################################
# INDEX
get '/plants' do
  @plants = Plant.all
  erb :plants_index
end

# NEW
get '/plants/new' do
  erb :plants_new
end

# CREATE
post '/plants' do
  plant = Plant.new
  plant.name = params[:name]
  plant.image = params[:image]
  plant.save
  redirect to("/plants/#{ plant.id }") # Show page
end

# SHOW
get '/plants/:id' do
  @plant = Plant.find params[:id]
  erb :plants_show
end

# EDIT
get '/plants/:id/edit' do
  @plant = Plant.find params[:id]
  erb :plants_edit
end

# UPDATE
post '/plants/:id' do
  plant = Plant.find params[:id]
  plant.name = params[:name]
  plant.image = params[:image]
  plant.save
  redirect to("/plants/#{ plant.id }")
end

# DESTROY
get '/plants/:id/delete' do
  plant = Plant.find params[:id]
  plant.destroy
  redirect to('/plants')
end

after do
  ActiveRecord::Base.connection.close
end

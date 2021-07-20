Rails.application.routes.draw do
  root :to => 'planets#index'
  get '/planets' => 'planets#index'
  get '/planets/new' => 'planets#new', :as => :new_planet
  get '/planets/:id' => 'planets#show', :as => :planet
end

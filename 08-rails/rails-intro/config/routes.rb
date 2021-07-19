Rails.application.routes.draw do
  get '/hello' => 'pages#hello' # 'controller#hello'
  get '/goodbye' => 'pages#goodbye'
  get '/funny' => 'pages#funny'

  get '/auto/:color' => 'auto#color'
  get '/auto/:hp/:torque' => 'auto#engine'

  get '/calc/:x/:y/:operator' => 'calculator#calculate'
end

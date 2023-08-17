Rails.application.routes.draw do
  namespace :api do
    get 'greetings/random', to: 'greetings#random'
  end

  # Other routes can be defined here

  # Defines the root path route ("/")
  root 'application#home'

end

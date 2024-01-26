Rails.application.routes.draw do
  resources :items
  resources :posts, only: :index
  root "posts#index"
end

Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users
  root :to => 'home#show'
  get "/", action: :show, controller: 'home', as: 'home'
  
  scope module: 'pages', path: '/' do
    get :resume
    get :portfolio
    get :synth
  end
end

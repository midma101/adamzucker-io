Rails.application.routes.draw do
  scope module: 'pages', path: '/' do
    get :misc
    get :resume
    get :portfolio
  end
  get "/", action: :show, controller: 'home', as: 'home'
end

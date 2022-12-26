Rails.application.routes.draw do
  mount Filepond::Rails::Engine, at: '/filepond'

  post 'home', to: 'home#update_avatar', as: :update_avatar
  delete 'home', to: 'home#destroy_avatar', as: :destroy_avatar

  root to: 'home#index'
end

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy]

    resource :session, only: [:create, :destroy]

    resources :boards, only: [:show, :update, :destroy, :create, :index] do
      resources :lists, only: [:index]
    end

    resources :lists, only: [:update, :destroy, :create] do
      resources :cards, only: [:index]
    end

    resources :cards, only: [:update, :destroy, :create] do
      resources :comments, only: [:index]
    end

    resources :comments, only: [:update, :destroy, :create]
  end

  root "static_pages#root"
end

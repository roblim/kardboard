Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy] do
      resources :boards, only: [:index]
      resources :board_shares, only: [:index]
    end

    resource :session, only: [:create, :destroy]

    resources :boards, only: [:show, :update, :destroy, :create] do
      resources :lists, only: [:index]
    end

    resources :lists, only: [:update, :destroy, :create] do
      resources :cards, only: [:index]
    end

    resources :cards, only: [:update, :destroy, :create, :show] do
      resources :users, only: [:index]
      resources :comments, only: [:index]
    end

    resources :comments, only: [:update, :destroy, :create]

    resources :board_shares, only: [:create, :destroy]
  end

  root "static_pages#root"
end

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
  end

  get '/api/users/search/:query' => 'api/users#search',
    as: 'api_users_search',
    defaults: { format: :json }

  get '/api/board_shares/:board_id/collaborators' => 'api/board_shares#get_collaborators',
    defaults: {format: :json }

  post '/api/board_shares/:board_id/:collaborator_id' => 'api/board_shares#create',
    defaults: { format: :json }

  delete '/api/board_shares/:board_id/:collaborator_id' => 'api/board_shares#destroy',
    defaults: { format: :json }

  root "static_pages#root"
end

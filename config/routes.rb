  Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks', registrations: "users/registrations" }
  root 'toppages#index'
  resources :items , only: [:new , :create, :destroy]
  get 'items/purchase'
  resources :toppages , only: [:index, :show]
  get 'mypages/main' => 'mypages#main'
  get 'mypages/logout' => 'mypages#logout'
  get 'mypages/card' => 'mypages#card'
  get 'mypages/info' => 'mypages#info'
  get 'mypages/deliver_address'
  get 'mypages/identification'
  get 'mypages/email_password'
  get 'mypages/notification'
  get 'mypages/support'
  get 'mypages/point'
  get 'mypages/sales'
  get 'mypages/sellingItem/:id' => 'mypages#sellingItem'
  get 'mypages/sign_up'
  get 'mypages/profile'
  get 'mypages/exhibitionItemSelling' => 'mypages#exhibitionItemSelling'
  get 'mypages/exhibitionItemTransaction' => 'mypages#exhibitionItemTransaction'
  get 'mypages/exhibitionItemSold' => 'mypages#exhibitionItemSold'
  get 'help_center/index' => 'help_center＃index'
  get 'items/search' => 'items#search'
end

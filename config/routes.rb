Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  root 'toppages#index'
  resources :items , only: [:new , :create, :destroy, :update]
  get 'items/purchase'
  get 'toppages/category_index'
  get 'toppages/small_category_show/:id' => 'toppages#small_category_show'
  get 'toppages/middle_category_show/:id' => 'toppages#middle_category_show'
  get 'toppages/large_category_show/:id' => 'toppages#large_category_show'
  resources :toppages , only: [:index, :show]
  # resources :items, only: %w(index search)
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
  get 'mypages/profile'
  get 'mypages/sellingItem/:id' => 'mypages#sellingItem'
  get 'mypages/sellingItem/:id/edit' => 'mypages#sellingItemEdit'
  get 'mypages/exhibitionItemSelling'
  get 'mypages/exhibitionItemTransaction'
  get 'mypages/exhibitionItemSold'
  get 'mypages/sign_up'
  get 'mypages/users/:id' => 'mypages#users'
  get 'help_center/index' => 'help_center＃index'
  get 'items/purchase/:id' => 'items#purchase'
  post 'settlement/create'
  get 'items/search' => 'items#search'
  get 'brands/wemens' => 'brands#wemens'
  get 'brands/kids' => 'brands#kids'
  get 'brands/hobby' => 'brands#hobby'

end

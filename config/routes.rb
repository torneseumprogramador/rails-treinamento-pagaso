Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'home#index'
  get "sobre", to: "home#sobre"
  get "contatos", to: "contato#lista"
  get "contato", to: "contato#index"
  post "contato/cadastrar", to: "contato#cadastrar"

  get "contato/:id/editar", to: "contato#editar"
  put "contato/:id/atualizar", to: "contato#atualizar"
  # get "contato/:id/excluir", to: "contato#excluir"
  delete "contato/:id/excluir", to: "contato#excluir"
  
end

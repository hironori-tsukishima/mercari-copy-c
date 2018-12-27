require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module MercariCopyC
  class Application < Rails::Application
    config.to_prepare do
      Devise::SessionsController.layout "simpleLayout"
      Devise::RegistrationsController.layout "noLayout"
      Devise::ConfirmationsController.layout "simpleLayout"
      Devise::UnlocksController.layout "simpleLayout"
      Devise::PasswordsController.layout "simpleLayout"
    end
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1
    config.i18n.default_locale = :ja
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end

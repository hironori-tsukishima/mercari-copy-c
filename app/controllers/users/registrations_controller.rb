class Users::RegistrationsController < Devise::RegistrationsController
  prepend_before_action :check_captcha, only: [:create]
  prepend_before_action :configure_permitted_parameters, only: [:create]

private
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:nickname])
  end

  def check_captcha
    self.resource = resource_class.new sign_up_params
    resource.validate
    set_minimum_password_length
    unless verify_recaptcha(model: resource)
      respond_with resource
    end
  end
end

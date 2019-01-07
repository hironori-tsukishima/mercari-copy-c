class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :setup_categoryPullDown

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:nickname])
  end

  def setup_categoryPullDown
    @large_categories = LargeCategory.all
    @middle_categories = MiddleCategory.all
    @small_categories = SmallCategory.all
    gon.l_cate = LargeCategory.all
    gon.m_cate = MiddleCategory.all
    gon.s_cate = SmallCategory.all
  end

end

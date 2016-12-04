class MainController < ApplicationController
  before_action :set_locale

  def index
  	@member = Member.new
  end
  
	def set_locale
  	I18n.locale = params[:locale] || I18n.default_locale
	end
end

class MainController < ApplicationController
  def index
  	@member = Member.new
  end
end

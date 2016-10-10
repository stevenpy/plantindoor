class MembersController < ApplicationController
	def create
		@member = Member.where(email: params['member']['email']).first_or_create

		respond_to do |format|
			if @member.save
				cookies[:saved_member] = true
				format.html { redirect_to root_path, notice: "Registered successfully!" }
			else
				format.html { redirect_to root_path, alert: "Failed to save!" }
				format.js
			end
		end
	end
	private

		def member_params
			params.require(:member).permit(:email)
		end

end
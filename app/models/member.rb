class Member < ActiveRecord::Base
	after_save :add_member_to_mailchimp
	validates :email, presence: true

	private

	def add_member_to_mailchimp
		gibbon = Gibbon::Request.new(api_key: ENV["MAILCHIMP_API_KEY"])
		gibbon.lists("18edd4b1cd").members.create(body: {email_address: email, status: "subscribed"})
	end
end

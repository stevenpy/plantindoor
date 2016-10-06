class Member < ActiveRecord::Base
	validates :email, presence: true
end

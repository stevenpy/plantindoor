class MemberMailer < ApplicationMailer
	default from: 'contact@plantindoor.com'
 
  def welcome_email(email)
    mail(to: email, subject: 'Welcome to PlantIndoor newsletter')
  end
end

ActionMailer::Base.smtp_settings = {
  user_name:            ENV['GODADDY_USERNAME'],
  password:             ENV['GODADDY_PSW'],
  domain:               'plantindoor.com',
  address:              'smtpout.secureserver.net',
  port:                 80,
  authentication:       'plain',
  enable_starttls_auto: true,
}
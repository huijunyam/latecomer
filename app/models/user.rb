class User < ActiveRecord::Base
  attr_reader :password
  validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: :true
  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    ensure_session_token_uniqueness
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = User.generate_session_token
    end
  end
end

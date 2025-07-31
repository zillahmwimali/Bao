class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

   
  validates :name, presence: true
  validates :phone, presence: true
  validates :user_role, presence: true

  enum :user_role, { admin: "admin", user: "user" }

end

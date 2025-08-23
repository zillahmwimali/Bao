# frozen_string_literal: true

# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
if Rails.env.development? || Rails.env.test? || ENV["SEED_ADMIN"] == "true"
User.find_or_create_by!(email: ENV.fetch("ADMIN_EMAIL")) do |user|
  user.name = ENV.fetch("ADMIN_NAME", "Bao Admin")
  user.phone = ENV["ADMIN_PHONE"]
  user.user_role = "admin"
  user.password = ENV.fetch("ADMIN_PASSWORD")
  user.password_confirmation = ENV.fetch("ADMIN_PASSWORD")
end
end
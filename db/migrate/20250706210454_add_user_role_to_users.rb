# frozen_string_literal: true

class AddUserRoleToUsers < ActiveRecord::Migration[8.0]
  def change
    add_column(:users, :user_role, :string, null: false, default: "user")
  end
end

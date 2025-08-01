# frozen_string_literal: true

module Dashboard
  class LandingController < ApplicationController
    before_action :authenticate_user!
    before_action :ensure_admin

    def index
      render(inertia: "Dashboard", props: {
        message: "Hello Admin #{current_user.name || "User"}",
      })
    end

    private

    def ensure_admin
      unless current_user.admin?
        redirect_to(root_path, alert: "You are not authorized to access this page")
      end
    end
  end
end

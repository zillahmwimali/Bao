# frozen_string_literal: true

module Dashboard
  class LandingController < ApplicationController
    before_action :authenticate_user!

    def index
      render(inertia: "Dashboard", props: {
        message: "Hello Admin #{current_user.name}",
      })
    end
  end
end

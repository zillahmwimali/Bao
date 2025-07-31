# frozen_string_literal: true

class HomeController < ApplicationController
  include InertiaRails::Controller

  def index
    puts "Is user signed in? #{user_signed_in?}"
    puts "Who is current_user? #{current_user&.email}"
    render(inertia: "Home", props: {
      message: "Inertia + React + Vite + Tailwind + TypeScript boilerplate",
    })
  end
end

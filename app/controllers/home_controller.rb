class HomeController < ApplicationController
    include InertiaRails::Controller
  
    def index
      render inertia: 'Home', props: {
        message: 'Inertia + React + Vite + Tailwind + TypeScript boilerplate'
      }
    end
  end

  